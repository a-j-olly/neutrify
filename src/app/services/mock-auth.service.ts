import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
import { FilterService } from './filter.service';
import { ToastController } from '@ionic/angular';

// Mock class to replace AmplifyService
class MockAmplifyService {
	authStateChange$ = new BehaviorSubject<any>({ state: 'signOut', user: null });

	setAuthState(authState: { state: string; user: any }) {
		this.authStateChange$.next(authState);
	}
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public signedIn = false;
	public state: string;
	public user: any;
	public userEmail: string;
	public signUpEmail: string;
	public resetPasswordEmail: string;
	public userId: string;
	public configId: string;

	public filtersInitStatus = false;
	public filtersInitStatus$ = new Subject<boolean>();
	public userEmail$ = new Subject<string>();

	// Mock user storage
	private mockUsers: { email: string; password: string; verified: boolean }[] =
		[
			{ email: 'demo@example.com', password: 'Password123', verified: true },
			{ email: 'test@example.com', password: 'Test1234', verified: true },
		];

	// Store the current mock user
	private currentUser: any = null;
	private mockConfigs: any[] = [];

	constructor(
		private amplifyService: MockAmplifyService,
		private filterService: FilterService,
		private menu: MenuController,
		private storage: Storage,
		private toastController: ToastController
	) {
		// Initialize the mock system
		this.initializeMock();
	}

	public async updateFiltersInitStatus(isSaved: boolean) {
		this.filtersInitStatus = isSaved;
		this.filtersInitStatus$.next(isSaved);
	}

	public getFiltersInitStatus() {
		return this.filtersInitStatus$.asObservable();
	}

	public async updateUserEmail(email: string) {
		this.userEmail = email;
		this.userEmail$.next(email);
	}

	public getUserEmail() {
		return this.userEmail$.asObservable();
	}

	public setState(state: string, user?: any) {
		this.amplifyService.setAuthState({ state, user: user ? user : this.user });
	}

	public async signIn(email: string, password: string): Promise<string> {
		// Simulate network delay
		await this.delay(800);

		// Find the user in our mock database
		const user = this.mockUsers.find(
			(u) => u.email.toLowerCase() === email.toLowerCase()
		);

		if (!user) {
			return 'false'; // User not found
		}

		if (user.password !== password) {
			return 'false'; // Wrong password
		}

		if (!user.verified) {
			this.signUpEmail = email;
			return 'resetPassword'; // User not verified
		}

		// Create mock user object similar to Cognito
		this.currentUser = {
			username: email,
			attributes: {
				email,
				sub: 'mock-sub-' + Math.random().toString(36).substring(2, 15),
			},
		};

		// Store session
		localStorage.setItem(
			'neutrify-mock-session',
			JSON.stringify({
				user: this.currentUser,
			})
		);

		// Set auth state
		this.amplifyService.setAuthState({
			state: 'signedIn',
			user: this.currentUser,
		});

		return 'true';
	}

	public async signOut(): Promise<boolean> {
		await this.delay(500);

		localStorage.removeItem('neutrify-mock-session');
		this.currentUser = null;
		this.user = null;
		this.updateUserEmail(null);
		this.userId = null;
		this.configId = null;
		this.updateFiltersInitStatus(false);

		this.amplifyService.setAuthState({
			state: 'signOut',
			user: null,
		});

		return true;
	}

	public async signUp(email: string, password: string): Promise<boolean> {
		await this.delay(800);

		// Check if user already exists
		const existingUser = this.mockUsers.find(
			(u) => u.email.toLowerCase() === email.toLowerCase()
		);
		if (existingUser) {
			return false;
		}

		// Create new user
		this.mockUsers.push({
			email,
			password,
			verified: false,
		});

		this.signUpEmail = email;
		return true;
	}

	public async confirmSignUp(vefCode: string): Promise<boolean> {
		await this.delay(600);

		if (!this.signUpEmail) {
			return false;
		}

		// In the mock, any code is accepted
		const mockCode = '123456';

		if (vefCode === mockCode || vefCode === '123456') {
			// Find the user and verify them
			const userIndex = this.mockUsers.findIndex(
				(u) => u.email.toLowerCase() === this.signUpEmail.toLowerCase()
			);
			if (userIndex !== -1) {
				this.mockUsers[userIndex].verified = true;
				return true;
			}
		}

		return false;
	}

	public async resendSignUp(email?: string): Promise<boolean> {
		await this.delay(500);

		const emailToUse = email || this.signUpEmail;

		if (!emailToUse) {
			return false;
		}

		const userIndex = this.mockUsers.findIndex(
			(u) => u.email.toLowerCase() === emailToUse.toLowerCase()
		);

		if (userIndex !== -1) {
			if (email && !this.signUpEmail) {
				this.signUpEmail = email;
			}
			return true;
		}

		return false;
	}

	public async resetPassword(email: string): Promise<boolean> {
		await this.delay(600);

		const userIndex = this.mockUsers.findIndex(
			(u) => u.email.toLowerCase() === email.toLowerCase()
		);

		if (userIndex !== -1) {
			this.resetPasswordEmail = email;
			return true;
		}

		return false;
	}

	public async resetPasswordSubmit(vefCode, password): Promise<boolean> {
		await this.delay(700);

		if (!this.resetPasswordEmail) {
			return false;
		}

		// Any code is accepted in the mock
		if (vefCode === '123456' || vefCode.length >= 4) {
			const userIndex = this.mockUsers.findIndex(
				(u) => u.email.toLowerCase() === this.resetPasswordEmail.toLowerCase()
			);

			if (userIndex !== -1) {
				this.mockUsers[userIndex].password = password;
				return true;
			}
		}

		return false;
	}

	public async isAuthenticated(): Promise<boolean> {
		return this.currentUser !== null;
	}

	public async isAuthenticatedOrGuest(): Promise<boolean> {
		return this.state === 'guest' || (await this.isAuthenticated());
	}

	public async deleteAccount(): Promise<boolean> {
		await this.delay(800);

		if (!this.currentUser) {
			return false;
		}

		const email = this.userEmail;

		// Remove from mock users
		const userIndex = this.mockUsers.findIndex(
			(u) => u.email.toLowerCase() === email.toLowerCase()
		);
		if (userIndex !== -1) {
			this.mockUsers.splice(userIndex, 1);
		}

		// Remove config
		const configIndex = this.mockConfigs.findIndex(
			(c) => c.id === this.configId
		);
		if (configIndex !== -1) {
			this.mockConfigs.splice(configIndex, 1);
		}

		this.user = null;
		this.updateUserEmail(null);
		this.userId = null;
		this.configId = null;
		await this.signOut();

		return true;
	}

	private async initializeMock() {
		// Create a default empty config
		if (this.mockConfigs.length === 0) {
			this.mockConfigs.push(this.createDefaultConfig('mock-config-1'));
		}

		// Subscribe to auth state changes like the original service
		this.amplifyService.authStateChange$.subscribe(async (authState) => {
			const state = authState.state;
			this.state = authState.state;
			this.signedIn = this.state === 'signedIn';

			if (!authState.user) {
				this.user = { identityId: 'mock-identity-id' };
			} else {
				this.user = authState.user;
				if (this.signedIn) {
					this.updateUserEmail(this.user.attributes.email);
				}
			}

			if (state === 'signedIn' || state === 'guest') {
				try {
					await this.handleInitialLoad();
					this.updateFiltersInitStatus(true);
				} catch (err) {
					console.log('Could not load your filters. Mock error:', err);
					alert('Could not load your filters. Please check your connection.');
				}
			}
		});

		// Check for stored session
		const storedSession = localStorage.getItem('neutrify-mock-session');
		if (storedSession) {
			const session = JSON.parse(storedSession);
			if (session && session.user) {
				this.user = session.user;
				this.amplifyService.setAuthState({
					state: 'signedIn',
					user: session.user,
				});
			}
		}
	}

	// Helper method to handle the initial load of filters
	private async handleInitialLoad() {
		const localFilters = await this.storage.get('neutrify_filters');
		let loadedFilters;

		if (localFilters !== null && localFilters !== undefined) {
			loadedFilters = JSON.parse(localFilters);
		} else {
			const newFilters = this.filterService.blankFilterObj(this.generateUUID());
			await this.storage.set(
				'neutrify_filters',
				JSON.stringify(this.filterService.unmarshalFilter(newFilters))
			);
			loadedFilters = newFilters;
		}

		if (loadedFilters !== null && loadedFilters !== undefined) {
			this.configId = loadedFilters.id;
			loadedFilters = await this.validateFilters(loadedFilters);
			await this.finaliseInit(loadedFilters);
		} else {
			throw new Error('Loaded filters object was null or undefined.');
		}

		if (this.signedIn) {
			const config = await this.getMockConfig(this.user.username);

			if (config === null || config === undefined) {
				loadedFilters = await this.validateFilters(
					await this.createMockConfig(this.user)
				);
				await this.finaliseInit(loadedFilters);
				await this.storage.set(
					'neutrify_filters',
					JSON.stringify(this.filterService.unmarshalFilter(loadedFilters))
				);
			} else {
				this.userId = this.userId ? this.userId : config.user.id;
				loadedFilters = await this.validateFilters(config);
				await this.finaliseInit(loadedFilters);
				await this.storage.set(
					'neutrify_filters',
					JSON.stringify(this.filterService.unmarshalFilter(loadedFilters))
				);
			}

			this.userId = this.userId ? this.userId : config.user.id;
		}
	}

	// Helper methods to simulate AWS Service behavior
	private async createMockConfig(user) {
		this.userId = this.generateUUID();
		this.configId = this.generateUUID();

		let newConfig;
		const localFilters = await this.storage.get('neutrify_filters');

		if (localFilters !== null && localFilters !== undefined) {
			newConfig = JSON.parse(localFilters);
		} else {
			newConfig = this.filterService.blankFilterObj(this.configId);
		}

		newConfig['configUserId'] = this.userId;
		newConfig['id'] = this.configId;

		const mockUser = {
			email: user.attributes.email,
			id: this.userId,
			userConfigId: this.configId,
			createdAt: new Date().toISOString(),
			ownerId: user.username,
		};

		// Store in our mock system
		this.mockConfigs.push(newConfig);

		return newConfig;
	}

	private async getMockConfig(username) {
		await this.delay(300);

		// Find config for the username
		const config = this.mockConfigs.find((c) => c.ownerId === username);

		if (config) {
			return config;
		}

		// If no config exists, create a default one
		const defaultConfig = this.createDefaultConfig(this.generateUUID());
		defaultConfig.ownerId = username;

		this.mockConfigs.push(defaultConfig);
		return defaultConfig;
	}

	private createDefaultConfig(id: string) {
		return {
			id,
			ownerId: 'mock-owner',
			keywordsToInclude: [],
			keywordsToExclude: [],
			toneUpperRange: 1,
			toneLowerRange: -1,
			topicsToInclude: JSON.stringify(this.filterService.blankTopicObj()),
			topicsToExclude: JSON.stringify(this.filterService.blankTopicObj()),
			sourcesToInclude: [],
			sourcesToExclude: [],
			locationsToInclude: [],
			locationsToExclude: [],
			biasToInclude: [],
			biasToExclude: [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			user: {
				id: this.generateUUID(),
				email: 'mock@example.com',
				ownerId: 'mock-owner',
			},
		};
	}

	private async validateFilters(filters: any) {
		const validFields = [
			'id',
			'toneUpperRange',
			'toneLowerRange',
			'sourcesToInclude',
			'sourcesToExclude',
			'topicsToInclude',
			'topicsToExclude',
			'keywordsToInclude',
			'keywordsToExclude',
			'locationsToInclude',
			'locationsToExclude',
			'biasToInclude',
			'biasToExclude',
		];

		const missingFields = [];
		validFields.forEach((field: string) => {
			if (!filters.hasOwnProperty(field) || !filters[field]) {
				missingFields.push(field);
			}
		});

		if (missingFields && missingFields.length) {
			filters = await this.updateMissingConfig(missingFields, filters);
		}

		return filters;
	}

	private async finaliseInit(finalFilters) {
		const filters = this.filterService.unmarshalFilter(finalFilters);

		this.menu.enable(true, 'filterMenu');
		this.menu.enable(true, 'mainMenu');
		this.menu.swipeGesture(true, 'filterMenu');
		this.menu.swipeGesture(true, 'mainMenu');

		await this.filterService.updateFilterOptions(filters);
		await this.filterService.updateFilterSaved(true);
	}

	private async updateMissingConfig(missingItems: Array<string>, filters) {
		console.log(`Adding ${missingItems.length} missing items`);
		console.log(`The missing items are: ${missingItems}`);

		missingItems.forEach((item: string) => {
			filters[item] = this.setBlankUpdate(item);
		});

		if (this.signedIn) {
			const updateInput = { id: this.configId };
			missingItems.forEach((item: string) => {
				updateInput[item] = this.setBlankUpdate(item);
			});

			// Update the mock config
			const configIndex = this.mockConfigs.findIndex(
				(c) => c.id === this.configId
			);
			if (configIndex !== -1) {
				this.mockConfigs[configIndex] = {
					...this.mockConfigs[configIndex],
					...updateInput,
				};
			}
		} else {
			await this.storage.set(
				'neutrify_filters',
				JSON.stringify(this.filterService.unmarshalFilter(filters))
			);
		}

		return filters;
	}

	private setBlankUpdate(item: string) {
		let res;

		if (item === 'toneLowerRange') {
			res = -1;
		} else if (item === 'toneUpperRange') {
			res = 1;
		} else if (item === 'topicsToExclude' || item === 'topicsToInclude') {
			res = JSON.stringify(this.filterService.blankTopicObj());
		} else {
			res = [];
		}

		return res;
	}

	// Utility methods
	private generateUUID() {
		return (
			'mock-' +
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15)
		);
	}

	private async delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	private async presentToast(message, color) {
		const toast = await this.toastController.create({
			message,
			duration: 2000,
			color,
			cssClass: 'ion-text-center',
			position: 'middle',
		});
		toast.present();
	}
}
