/* tslint:disable */
/* eslint-disable */
// Mock implementation to replace the AWS AppSync API service
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

// We need to redefine all the types used by the original service
export type CreateUserInput = {
	createdAt?: string | null;
	email: string;
	id?: string | null;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
	userConfigId?: string | null;
};

export type User = {
	__typename: 'User';
	config?: Config;
	createdAt?: string | null;
	email?: string;
	id?: string;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
};

export type Config = {
	__typename: 'Config';
	createdAt?: string | null;
	id?: string;
	keywordsToInclude?: Array<string | null>;
	keywordsToExclude?: Array<string | null>;
	ownerId?: string | null;
	toneUpperRange?: number;
	toneLowerRange?: number;
	topicsToInclude?: string;
	topicsToExclude?: string;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude?: Array<string | null>;
	sourcesToExclude?: Array<string | null>;
	locationsToInclude?: Array<string | null>;
	locationsToExclude?: Array<string | null>;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	user?: User;
};

export type UpdateUserInput = {
	createdAt?: string | null;
	email?: string | null;
	id: string;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
	userConfigId?: string | null;
};

export type DeleteUserInput = {
	id?: string | null;
};

export type CreateConfigInput = {
	createdAt?: string | null;
	id?: string | null;
	keywordsToInclude: Array<string | null>;
	keywordsToExclude: Array<string | null>;
	ownerId?: string | null;
	toneUpperRange: number;
	toneLowerRange: number;
	topicsToInclude: string;
	topicsToExclude: string;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude: Array<string | null>;
	sourcesToExclude: Array<string | null>;
	locationsToInclude: Array<string | null>;
	locationsToExclude: Array<string | null>;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	configUserId?: string | null;
};

export type UpdateConfigInput = {
	createdAt?: string | null;
	id: string;
	keywordsToInclude?: Array<string | null> | null;
	keywordsToExclude?: Array<string | null> | null;
	ownerId?: string | null;
	toneUpperRange?: number | null;
	toneLowerRange?: number | null;
	topicsToInclude?: string | null;
	topicsToExclude?: string | null;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude?: Array<string | null> | null;
	sourcesToExclude?: Array<string | null> | null;
	locationsToInclude?: Array<string | null> | null;
	locationsToExclude?: Array<string | null> | null;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	configUserId?: string | null;
};

export type DeleteConfigInput = {
	id?: string | null;
};

export type ModelUserFilterInput = {
	createdAt?: ModelStringFilterInput | null;
	email?: ModelStringFilterInput | null;
	id?: ModelIDFilterInput | null;
	lastLogin?: ModelStringFilterInput | null;
	ownerId?: ModelStringFilterInput | null;
	feedbackDiscovery?: ModelStringFilterInput | null;
	feedbackLeaveReason?: ModelStringFilterInput | null;
	feedbackPromoterScore?: ModelIntFilterInput | null;
	updatedAt?: ModelStringFilterInput | null;
	and?: Array<ModelUserFilterInput | null> | null;
	or?: Array<ModelUserFilterInput | null> | null;
	not?: ModelUserFilterInput | null;
};

export type ModelStringFilterInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
};

export type ModelIDFilterInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
};

export type ModelIntFilterInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
};

export type ModelUserConnection = {
	__typename: 'ModelUserConnection';
	items?: Array<User | null> | null;
	nextToken?: string | null;
};

export type ModelConfigFilterInput = {
	createdAt?: ModelStringFilterInput | null;
	id?: ModelIDFilterInput | null;
	keywordsToInclude?: ModelStringFilterInput | null;
	keywordsToExclude?: ModelStringFilterInput | null;
	ownerId?: ModelStringFilterInput | null;
	toneUpperRange?: ModelFloatFilterInput | null;
	toneLowerRange?: ModelFloatFilterInput | null;
	topicsToInclude?: ModelStringFilterInput | null;
	topicsToExclude?: ModelStringFilterInput | null;
	savedArticleIds?: ModelIDFilterInput | null;
	sourcesToInclude?: ModelStringFilterInput | null;
	sourcesToExclude?: ModelStringFilterInput | null;
	locationsToInclude?: ModelStringFilterInput | null;
	locationsToExclude?: ModelStringFilterInput | null;
	biasToInclude?: ModelStringFilterInput | null;
	biasToExclude?: ModelStringFilterInput | null;
	updatedAt?: ModelStringFilterInput | null;
	and?: Array<ModelConfigFilterInput | null> | null;
	or?: Array<ModelConfigFilterInput | null> | null;
	not?: ModelConfigFilterInput | null;
};

export type ModelFloatFilterInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
};

export type ModelConfigConnection = {
	__typename: 'ModelConfigConnection';
	items?: Array<Config | null> | null;
	nextToken?: string | null;
};

export enum ModelSortDirection {
	ASC = 'ASC',
	DESC = 'DESC',
}

export type Article = {
	__typename: 'Article';
	authors?: Array<string> | null;
	biasRating?: string | null;
	body?: string;
	createdAt?: string | null;
	dataType?: string;
	date?: string | null;
	datePublished?: string;
	displayBiasRating?: string | null;
	displayAuthors?: Array<string> | null;
	displayDateTime?: string;
	displayKeywords?: Array<string> | null;
	displaySourceCountry?: string;
	displaySourceTitle?: string;
	displayTopics?: Array<string> | null;
	eventUri?: string | null;
	id?: string;
	image?: string | null;
	keywords?: Array<string> | null;
	language?: string | null;
	share?: number | null;
	similarity?: number | null;
	searchTerms?: Array<string | null> | null;
	sourceCountry?: string;
	sourceRanking?: number | null;
	sourceTitle?: string;
	title?: string;
	time?: string | null;
	tone?: number;
	topics?: Array<string> | null;
	timeToLive?: number | null;
	updatedAt?: string | null;
	uri?: string;
	url?: string;
	wordCount?: number;
};

export type ModelStringKeyConditionInput = {
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
};

export type ModelArticleFilterInput = {
	authors?: ModelStringFilterInput | null;
	biasRating?: ModelStringFilterInput | null;
	body?: ModelStringFilterInput | null;
	createdAt?: ModelStringFilterInput | null;
	dataType?: ModelStringFilterInput | null;
	date?: ModelStringFilterInput | null;
	datePublished?: ModelStringFilterInput | null;
	displayBiasRating?: ModelStringFilterInput | null;
	displayAuthors?: ModelStringFilterInput | null;
	displayDateTime?: ModelStringFilterInput | null;
	displayKeywords?: ModelStringFilterInput | null;
	displaySourceCountry?: ModelStringFilterInput | null;
	displaySourceTitle?: ModelStringFilterInput | null;
	displayTopics?: ModelStringFilterInput | null;
	eventUri?: ModelStringFilterInput | null;
	id?: ModelIDFilterInput | null;
	image?: ModelStringFilterInput | null;
	keywords?: ModelStringFilterInput | null;
	language?: ModelStringFilterInput | null;
	share?: ModelIntFilterInput | null;
	similarity?: ModelFloatFilterInput | null;
	searchTerms?: ModelStringFilterInput | null;
	sourceCountry?: ModelStringFilterInput | null;
	sourceRanking?: ModelIntFilterInput | null;
	sourceTitle?: ModelStringFilterInput | null;
	title?: ModelStringFilterInput | null;
	time?: ModelStringFilterInput | null;
	tone?: ModelFloatFilterInput | null;
	topics?: ModelStringFilterInput | null;
	timeToLive?: ModelFloatFilterInput | null;
	updatedAt?: ModelStringFilterInput | null;
	uri?: ModelStringFilterInput | null;
	url?: ModelStringFilterInput | null;
	wordCount?: ModelIntFilterInput | null;
	and?: Array<ModelArticleFilterInput | null> | null;
	or?: Array<ModelArticleFilterInput | null> | null;
	not?: ModelArticleFilterInput | null;
};

export type ModelArticleConnection = {
	__typename: 'ModelArticleConnection';
	items?: Array<Article | null> | null;
	nextToken?: string | null;
};

export type CreateUserMutation = {
	__typename: 'User';
	config?: {
		__typename: 'Config';
		createdAt?: string | null;
		id: string;
		keywordsToInclude: Array<string | null>;
		keywordsToExclude: Array<string | null>;
		ownerId?: string | null;
		toneUpperRange: number;
		toneLowerRange: number;
		topicsToInclude: string;
		topicsToExclude: string;
		savedArticleIds?: Array<string> | null;
		sourcesToInclude: Array<string | null>;
		sourcesToExclude: Array<string | null>;
		locationsToInclude: Array<string | null>;
		locationsToExclude: Array<string | null>;
		biasToInclude?: Array<string | null> | null;
		biasToExclude?: Array<string | null> | null;
		updatedAt?: string | null;
		user?: {
			__typename: 'User';
			createdAt?: string | null;
			email: string;
			id: string;
			lastLogin?: string | null;
			ownerId?: string | null;
			feedbackDiscovery?: string | null;
			feedbackLeaveReason?: string | null;
			feedbackPromoterScore?: number | null;
			updatedAt?: string | null;
		} | null;
	} | null;
	createdAt?: string | null;
	email: string;
	id: string;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
};

export type UpdateUserMutation = {
	__typename: 'User';
	config?: {
		__typename: 'Config';
		createdAt?: string | null;
		id: string;
		keywordsToInclude: Array<string | null>;
		keywordsToExclude: Array<string | null>;
		ownerId?: string | null;
		toneUpperRange: number;
		toneLowerRange: number;
		topicsToInclude: string;
		topicsToExclude: string;
		savedArticleIds?: Array<string> | null;
		sourcesToInclude: Array<string | null>;
		sourcesToExclude: Array<string | null>;
		locationsToInclude: Array<string | null>;
		locationsToExclude: Array<string | null>;
		biasToInclude?: Array<string | null> | null;
		biasToExclude?: Array<string | null> | null;
		updatedAt?: string | null;
	} | null;
	createdAt?: string | null;
	email: string;
	id: string;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
};

export type DeleteUserMutation = {
	__typename: 'User';
	config?: {
		__typename: 'Config';
		createdAt?: string | null;
		id: string;
		keywordsToInclude: Array<string | null>;
		keywordsToExclude: Array<string | null>;
		ownerId?: string | null;
		toneUpperRange: number;
		toneLowerRange: number;
		topicsToInclude: string;
		topicsToExclude: string;
		savedArticleIds?: Array<string> | null;
		sourcesToInclude: Array<string | null>;
		sourcesToExclude: Array<string | null>;
		locationsToInclude: Array<string | null>;
		locationsToExclude: Array<string | null>;
		biasToInclude?: Array<string | null> | null;
		biasToExclude?: Array<string | null> | null;
		updatedAt?: string | null;
	} | null;
	createdAt?: string | null;
	email: string;
	id: string;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
};

export type CreateConfigMutation = {
	__typename: 'Config';
	createdAt?: string | null;
	id: string;
	keywordsToInclude: Array<string | null>;
	keywordsToExclude: Array<string | null>;
	ownerId?: string | null;
	toneUpperRange: number;
	toneLowerRange: number;
	topicsToInclude: string;
	topicsToExclude: string;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude: Array<string | null>;
	sourcesToExclude: Array<string | null>;
	locationsToInclude: Array<string | null>;
	locationsToExclude: Array<string | null>;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	user?: {
		__typename: 'User';
		createdAt?: string | null;
		email: string;
		id: string;
		lastLogin?: string | null;
		ownerId?: string | null;
		feedbackDiscovery?: string | null;
		feedbackLeaveReason?: string | null;
		feedbackPromoterScore?: number | null;
		updatedAt?: string | null;
	} | null;
};

export type UpdateConfigMutation = {
	__typename: 'Config';
	createdAt?: string | null;
	id: string;
	keywordsToInclude: Array<string | null>;
	keywordsToExclude: Array<string | null>;
	ownerId?: string | null;
	toneUpperRange: number;
	toneLowerRange: number;
	topicsToInclude: string;
	topicsToExclude: string;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude: Array<string | null>;
	sourcesToExclude: Array<string | null>;
	locationsToInclude: Array<string | null>;
	locationsToExclude: Array<string | null>;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	user?: {
		__typename: 'User';
		createdAt?: string | null;
		email: string;
		id: string;
		lastLogin?: string | null;
		ownerId?: string | null;
		feedbackDiscovery?: string | null;
		feedbackLeaveReason?: string | null;
		feedbackPromoterScore?: number | null;
		updatedAt?: string | null;
	} | null;
};

export type DeleteConfigMutation = {
	__typename: 'Config';
	createdAt?: string | null;
	id: string;
	keywordsToInclude: Array<string | null>;
	keywordsToExclude: Array<string | null>;
	ownerId?: string | null;
	toneUpperRange: number;
	toneLowerRange: number;
	topicsToInclude: string;
	topicsToExclude: string;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude: Array<string | null>;
	sourcesToExclude: Array<string | null>;
	locationsToInclude: Array<string | null>;
	locationsToExclude: Array<string | null>;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	user?: {
		__typename: 'User';
		createdAt?: string | null;
		email: string;
		id: string;
		lastLogin?: string | null;
		ownerId?: string | null;
		feedbackDiscovery?: string | null;
		feedbackLeaveReason?: string | null;
		feedbackPromoterScore?: number | null;
		updatedAt?: string | null;
	} | null;
};

export type GetUserQuery = {
	__typename: 'User';
	config?: {
		__typename: 'Config';
		createdAt?: string | null;
		id: string;
		keywordsToInclude: Array<string | null>;
		keywordsToExclude: Array<string | null>;
		ownerId?: string | null;
		toneUpperRange: number;
		toneLowerRange: number;
		topicsToInclude: string;
		topicsToExclude: string;
		savedArticleIds?: Array<string> | null;
		sourcesToInclude: Array<string | null>;
		sourcesToExclude: Array<string | null>;
		locationsToInclude: Array<string | null>;
		locationsToExclude: Array<string | null>;
		biasToInclude?: Array<string | null> | null;
		biasToExclude?: Array<string | null> | null;
		updatedAt?: string | null;
	} | null;
	createdAt?: string | null;
	email: string;
	id: string;
	lastLogin?: string | null;
	ownerId?: string | null;
	feedbackDiscovery?: string | null;
	feedbackLeaveReason?: string | null;
	feedbackPromoterScore?: number | null;
	updatedAt?: string | null;
};

export type ListUsersQuery = {
	__typename: 'ModelUserConnection';
	items?: Array<{
		__typename: 'User';
		config?: {
			__typename: 'Config';
			createdAt?: string | null;
			id: string;
			keywordsToInclude: Array<string | null>;
			keywordsToExclude: Array<string | null>;
			ownerId?: string | null;
			toneUpperRange: number;
			toneLowerRange: number;
			topicsToInclude: string;
			topicsToExclude: string;
			savedArticleIds?: Array<string> | null;
			sourcesToInclude: Array<string | null>;
			sourcesToExclude: Array<string | null>;
			locationsToInclude: Array<string | null>;
			locationsToExclude: Array<string | null>;
			biasToInclude?: Array<string | null> | null;
			biasToExclude?: Array<string | null> | null;
			updatedAt?: string | null;
		} | null;
		createdAt?: string | null;
		email: string;
		id: string;
		lastLogin?: string | null;
		ownerId?: string | null;
		feedbackDiscovery?: string | null;
		feedbackLeaveReason?: string | null;
		feedbackPromoterScore?: number | null;
		updatedAt?: string | null;
	} | null> | null;
	nextToken?: string | null;
};

export type GetConfigQuery = {
	__typename: 'Config';
	createdAt?: string | null;
	id: string;
	keywordsToInclude: Array<string | null>;
	keywordsToExclude: Array<string | null>;
	ownerId?: string | null;
	toneUpperRange: number;
	toneLowerRange: number;
	topicsToInclude: string;
	topicsToExclude: string;
	savedArticleIds?: Array<string> | null;
	sourcesToInclude: Array<string | null>;
	sourcesToExclude: Array<string | null>;
	locationsToInclude: Array<string | null>;
	locationsToExclude: Array<string | null>;
	biasToInclude?: Array<string | null> | null;
	biasToExclude?: Array<string | null> | null;
	updatedAt?: string | null;
	user?: {
		__typename: 'User';
		createdAt?: string | null;
		email: string;
		id: string;
		lastLogin?: string | null;
		ownerId?: string | null;
		feedbackDiscovery?: string | null;
		feedbackLeaveReason?: string | null;
		feedbackPromoterScore?: number | null;
		updatedAt?: string | null;
	} | null;
};

export type ListConfigsQuery = {
	__typename: 'ModelConfigConnection';
	items?: Array<{
		__typename: 'Config';
		createdAt?: string | null;
		id: string;
		keywordsToInclude: Array<string | null>;
		keywordsToExclude: Array<string | null>;
		ownerId?: string | null;
		toneUpperRange: number;
		toneLowerRange: number;
		topicsToInclude: string;
		topicsToExclude: string;
		savedArticleIds?: Array<string> | null;
		sourcesToInclude: Array<string | null>;
		sourcesToExclude: Array<string | null>;
		locationsToInclude: Array<string | null>;
		locationsToExclude: Array<string | null>;
		biasToInclude?: Array<string | null> | null;
		biasToExclude?: Array<string | null> | null;
		updatedAt?: string | null;
		user?: {
			__typename: 'User';
			createdAt?: string | null;
			email: string;
			id: string;
			lastLogin?: string | null;
			ownerId?: string | null;
			feedbackDiscovery?: string | null;
			feedbackLeaveReason?: string | null;
			feedbackPromoterScore?: number | null;
			updatedAt?: string | null;
		} | null;
	} | null> | null;
	nextToken?: string | null;
};

export type UserByOwnerQuery = {
	__typename: 'ModelUserConnection';
	items?: Array<{
		__typename: 'User';
		config?: {
			__typename: 'Config';
			createdAt?: string | null;
			id: string;
			keywordsToInclude: Array<string | null>;
			keywordsToExclude: Array<string | null>;
			ownerId?: string | null;
			toneUpperRange: number;
			toneLowerRange: number;
			topicsToInclude: string;
			topicsToExclude: string;
			savedArticleIds?: Array<string> | null;
			sourcesToInclude: Array<string | null>;
			sourcesToExclude: Array<string | null>;
			locationsToInclude: Array<string | null>;
			locationsToExclude: Array<string | null>;
			biasToInclude?: Array<string | null> | null;
			biasToExclude?: Array<string | null> | null;
			updatedAt?: string | null;
		} | null;
		createdAt?: string | null;
		email: string;
		id: string;
		lastLogin?: string | null;
		ownerId?: string | null;
		feedbackDiscovery?: string | null;
		feedbackLeaveReason?: string | null;
		feedbackPromoterScore?: number | null;
		updatedAt?: string | null;
	} | null> | null;
	nextToken?: string | null;
};

export type ConfigByOwnerQuery = {
	__typename: 'ModelConfigConnection';
	items?: Array<{
		__typename: 'Config';
		createdAt?: string | null;
		id: string;
		keywordsToInclude: Array<string | null>;
		keywordsToExclude: Array<string | null>;
		ownerId?: string | null;
		toneUpperRange: number;
		toneLowerRange: number;
		topicsToInclude: string;
		topicsToExclude: string;
		savedArticleIds?: Array<string> | null;
		sourcesToInclude: Array<string | null>;
		sourcesToExclude: Array<string | null>;
		locationsToInclude: Array<string | null>;
		locationsToExclude: Array<string | null>;
		biasToInclude?: Array<string | null> | null;
		biasToExclude?: Array<string | null> | null;
		updatedAt?: string | null;
		user?: {
			__typename: 'User';
			createdAt?: string | null;
			email: string;
			id: string;
			lastLogin?: string | null;
			ownerId?: string | null;
			feedbackDiscovery?: string | null;
			feedbackLeaveReason?: string | null;
			feedbackPromoterScore?: number | null;
			updatedAt?: string | null;
		} | null;
	} | null> | null;
	nextToken?: string | null;
};

export type GetArticleQuery = {
	__typename: 'Article';
	authors?: Array<string> | null;
	biasRating?: string | null;
	body: string;
	createdAt?: string | null;
	dataType: string;
	date?: string | null;
	datePublished: string;
	displayBiasRating?: string | null;
	displayAuthors?: Array<string> | null;
	displayDateTime: string;
	displayKeywords?: Array<string> | null;
	displaySourceCountry: string;
	displaySourceTitle: string;
	displayTopics?: Array<string> | null;
	eventUri?: string | null;
	id: string;
	image?: string | null;
	keywords?: Array<string> | null;
	language?: string | null;
	share?: number | null;
	similarity?: number | null;
	searchTerms?: Array<string | null> | null;
	sourceCountry: string;
	sourceRanking?: number | null;
	sourceTitle: string;
	title: string;
	time?: string | null;
	tone: number;
	topics?: Array<string> | null;
	timeToLive?: number | null;
	updatedAt?: string | null;
	uri: string;
	url: string;
	wordCount: number;
};

export type ListArticlesQuery = {
	__typename: 'ModelArticleConnection';
	items?: Array<{
		__typename: 'Article';
		authors?: Array<string> | null;
		biasRating?: string | null;
		body: string;
		createdAt?: string | null;
		dataType: string;
		date?: string | null;
		datePublished: string;
		displayBiasRating?: string | null;
		displayAuthors?: Array<string> | null;
		displayDateTime: string;
		displayKeywords?: Array<string> | null;
		displaySourceCountry: string;
		displaySourceTitle: string;
		displayTopics?: Array<string> | null;
		eventUri?: string | null;
		id: string;
		image?: string | null;
		keywords?: Array<string> | null;
		language?: string | null;
		share?: number | null;
		similarity?: number | null;
		searchTerms?: Array<string | null> | null;
		sourceCountry: string;
		sourceRanking?: number | null;
		sourceTitle: string;
		title: string;
		time?: string | null;
		tone: number;
		topics?: Array<string> | null;
		timeToLive?: number | null;
		updatedAt?: string | null;
		uri: string;
		url: string;
		wordCount: number;
	} | null> | null;
	nextToken?: string | null;
};

export type ArticlesByDateQuery = {
	__typename: 'ModelArticleConnection';
	items?: Array<{
		__typename: 'Article';
		authors?: Array<string> | null;
		biasRating?: string | null;
		body: string;
		createdAt?: string | null;
		dataType: string;
		date?: string | null;
		datePublished: string;
		displayBiasRating?: string | null;
		displayAuthors?: Array<string> | null;
		displayDateTime: string;
		displayKeywords?: Array<string> | null;
		displaySourceCountry: string;
		displaySourceTitle: string;
		displayTopics?: Array<string> | null;
		eventUri?: string | null;
		id: string;
		image?: string | null;
		keywords?: Array<string> | null;
		language?: string | null;
		share?: number | null;
		similarity?: number | null;
		searchTerms?: Array<string | null> | null;
		sourceCountry: string;
		sourceRanking?: number | null;
		sourceTitle: string;
		title: string;
		time?: string | null;
		tone: number;
		topics?: Array<string> | null;
		timeToLive?: number | null;
		updatedAt?: string | null;
		uri: string;
		url: string;
		wordCount: number;
	} | null> | null;
	nextToken?: string | null;
};

@Injectable({
	providedIn: 'root',
})
export class APIService {
	// Mock storage for users and configs
	private mockUsers: User[] = [];
	private mockConfigs: Config[] = [];
	private mockArticles: Article[] = [];

	constructor() {
		// Initialize with some mock data
		this.initializeMockData();
	}

	private initializeMockData() {
		// Sample mock articles
		this.mockArticles = this.generateMockArticles(50);
		console.log('Mock API Service initialized with sample data');
	}

	private generateMockArticles(count: number): Article[] {
		const articles: Article[] = [];
		const sources = [
			'CNN',
			'Fox News',
			'BBC',
			'The Guardian',
			'MSNBC',
			'Wall Street Journal',
			'Washington Post',
			'Al Jazeera',
		];
		const biasRatings = ['Left', 'Lean Left', 'Center', 'Lean Right', 'Right'];
		const countries = ['US', 'UK', 'CA', 'AU', 'FR', 'DE', 'JP', 'IN'];
		const topicsList = [
			['Politics', 'Election', 'Government'],
			['Business', 'Economy', 'Finance'],
			['Health', 'COVID-19', 'Medicine'],
			['Technology', 'AI', 'Innovation'],
			['Environment', 'Climate Change', 'Sustainability'],
			['Sports', 'Olympics', 'Football'],
			['Entertainment', 'Movies', 'Celebrity'],
			['Science', 'Space', 'Research'],
		];

		for (let i = 0; i < count; i++) {
			const dateObj = new Date();
			dateObj.setDate(dateObj.getDate() - Math.floor(Math.random() * 30)); // Random date within last 30 days
			const dateStr = dateObj.toISOString();
			const displayDateTime = dateObj.toLocaleString();

			const sourceIndex = Math.floor(Math.random() * sources.length);
			const sourceTitle = sources[sourceIndex];
			const biasRating =
				biasRatings[Math.floor(Math.random() * biasRatings.length)];
			const sourceCountry =
				countries[Math.floor(Math.random() * countries.length)];
			const topicsIndex = Math.floor(Math.random() * topicsList.length);
			const topics = topicsList[topicsIndex];

			const tone = Math.random() * 2 - 1; // Random tone between -1 and 1

			const article: Article = {
				__typename: 'Article',
				authors: [`Author ${i + 1}`, `Co-author ${i + 1}`],
				biasRating: biasRating,
				body: `This is the full article body for article ${
					i + 1
				}. It contains several paragraphs of text discussing ${topics[0].toLowerCase()} topics.`,
				createdAt: dateStr,
				dataType: 'NEWS',
				date: dateStr.split('T')[0],
				datePublished: dateStr,
				displayBiasRating: biasRating,
				displayAuthors: [`Author ${i + 1}`, `Co-author ${i + 1}`],
				displayDateTime: displayDateTime,
				displayKeywords: [`keyword${i}1`, `keyword${i}2`, `keyword${i}3`],
				displaySourceCountry: sourceCountry,
				displaySourceTitle: sourceTitle,
				displayTopics: topics,
				id: `mock-article-${i}`,
				image: `https://example.com/images/article${i}.jpg`,
				keywords: [`keyword${i}1`, `keyword${i}2`, `keyword${i}3`],
				language: 'en',
				share: Math.floor(Math.random() * 100),
				similarity: Math.random(),
				sourceCountry: sourceCountry,
				sourceRanking: Math.floor(Math.random() * 10),
				sourceTitle: sourceTitle,
				title: `Article ${i + 1}: ${topics[0]} and ${
					topics[1]
				} Impact on Global ${topics[2]}`,
				time: dateStr.split('T')[1],
				tone: tone,
				topics: topics,
				updatedAt: dateStr,
				uri: `mock://article/${i}`,
				url: `https://example.com/articles/${i}`,
				wordCount: 500 + Math.floor(Math.random() * 1000),
			};

			articles.push(article);
		}

		return articles;
	}

	private generateUUID(): string {
		return (
			'mock-' +
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15)
		);
	}

	private delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// User API methods
	async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
		await this.delay(500);

		const userId = input.id || this.generateUUID();
		const configId = this.generateUUID();

		// Create user
		const newUser: User = {
			__typename: 'User',
			id: userId,
			email: input.email,
			ownerId: input.ownerId || userId,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			lastLogin: input.lastLogin || new Date().toISOString(),
			feedbackDiscovery: input.feedbackDiscovery || null,
			feedbackLeaveReason: input.feedbackLeaveReason || null,
			feedbackPromoterScore: input.feedbackPromoterScore || null,
		};

		// Create default config for the user
		const newConfig: Config = {
			__typename: 'Config',
			id: configId,
			ownerId: newUser.ownerId,
			keywordsToInclude: [],
			keywordsToExclude: [],
			toneUpperRange: 1,
			toneLowerRange: -1,
			topicsToInclude: '{}',
			topicsToExclude: '{}',
			sourcesToInclude: [],
			sourcesToExclude: [],
			locationsToInclude: [],
			locationsToExclude: [],
			biasToInclude: [],
			biasToExclude: [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			user: newUser,
		};

		newUser.config = newConfig;

		this.mockUsers.push(newUser);
		this.mockConfigs.push(newConfig);

		return {
			__typename: 'User',
			id: newUser.id,
			email: newUser.email,
			ownerId: newUser.ownerId,
			createdAt: newUser.createdAt,
			updatedAt: newUser.updatedAt,
			lastLogin: newUser.lastLogin,
			feedbackDiscovery: newUser.feedbackDiscovery,
			feedbackLeaveReason: newUser.feedbackLeaveReason,
			feedbackPromoterScore: newUser.feedbackPromoterScore,
			config: newConfig,
		} as CreateUserMutation;
	}

	async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
		await this.delay(300);

		const userIndex = this.mockUsers.findIndex((u) => u.id === input.id);

		if (userIndex === -1) {
			throw new Error(`User with ID ${input.id} not found`);
		}

		// Update user fields
		if (input.email) this.mockUsers[userIndex].email = input.email;
		if (input.lastLogin) this.mockUsers[userIndex].lastLogin = input.lastLogin;
		if (input.feedbackDiscovery)
			this.mockUsers[userIndex].feedbackDiscovery = input.feedbackDiscovery;
		if (input.feedbackLeaveReason)
			this.mockUsers[userIndex].feedbackLeaveReason = input.feedbackLeaveReason;
		if (
			input.feedbackPromoterScore !== undefined &&
			input.feedbackPromoterScore !== null
		)
			this.mockUsers[userIndex].feedbackPromoterScore =
				input.feedbackPromoterScore;

		this.mockUsers[userIndex].updatedAt = new Date().toISOString();

		return {
			__typename: 'User',
			...this.mockUsers[userIndex],
		} as UpdateUserMutation;
	}

	async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
		await this.delay(400);

		const userIndex = this.mockUsers.findIndex((u) => u.id === input.id);

		if (userIndex === -1) {
			throw new Error(`User with ID ${input.id} not found`);
		}

		const deletedUser = this.mockUsers[userIndex];

		// Also delete associated config
		if (deletedUser.config) {
			const configIndex = this.mockConfigs.findIndex(
				(c) => c.id === deletedUser.config.id
			);
			if (configIndex !== -1) {
				this.mockConfigs.splice(configIndex, 1);
			}
		}

		// Remove user
		this.mockUsers.splice(userIndex, 1);

		return {
			__typename: 'User',
			...deletedUser,
		} as DeleteUserMutation;
	}

	// Config API methods
	async CreateConfig(input: CreateConfigInput): Promise<CreateConfigMutation> {
		await this.delay(500);

		const configId = input.id || this.generateUUID();

		const newConfig: Config = {
			__typename: 'Config',
			id: configId,
			ownerId: input.ownerId || configId,
			keywordsToInclude: input.keywordsToInclude || [],
			keywordsToExclude: input.keywordsToExclude || [],
			toneUpperRange:
				input.toneUpperRange !== undefined ? input.toneUpperRange : 1,
			toneLowerRange:
				input.toneLowerRange !== undefined ? input.toneLowerRange : -1,
			topicsToInclude: input.topicsToInclude || '{}',
			topicsToExclude: input.topicsToExclude || '{}',
			sourcesToInclude: input.sourcesToInclude || [],
			sourcesToExclude: input.sourcesToExclude || [],
			locationsToInclude: input.locationsToInclude || [],
			locationsToExclude: input.locationsToExclude || [],
			biasToInclude: input.biasToInclude || [],
			biasToExclude: input.biasToExclude || [],
			savedArticleIds: input.savedArticleIds || [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		// If user ID is provided, link to user
		if (input.configUserId) {
			const userIndex = this.mockUsers.findIndex(
				(u) => u.id === input.configUserId
			);
			if (userIndex !== -1) {
				newConfig.user = this.mockUsers[userIndex];
				this.mockUsers[userIndex].config = newConfig;
			}
		}

		this.mockConfigs.push(newConfig);

		return {
			__typename: 'Config',
			...newConfig,
		} as CreateConfigMutation;
	}

	async UpdateConfig(input: UpdateConfigInput): Promise<UpdateConfigMutation> {
		await this.delay(300);

		const configIndex = this.mockConfigs.findIndex((c) => c.id === input.id);

		if (configIndex === -1) {
			throw new Error(`Config with ID ${input.id} not found`);
		}

		// Update config fields
		if (input.keywordsToInclude)
			this.mockConfigs[configIndex].keywordsToInclude = input.keywordsToInclude;
		if (input.keywordsToExclude)
			this.mockConfigs[configIndex].keywordsToExclude = input.keywordsToExclude;
		if (input.toneUpperRange !== undefined)
			this.mockConfigs[configIndex].toneUpperRange = input.toneUpperRange;
		if (input.toneLowerRange !== undefined)
			this.mockConfigs[configIndex].toneLowerRange = input.toneLowerRange;
		if (input.topicsToInclude)
			this.mockConfigs[configIndex].topicsToInclude = input.topicsToInclude;
		if (input.topicsToExclude)
			this.mockConfigs[configIndex].topicsToExclude = input.topicsToExclude;
		if (input.sourcesToInclude)
			this.mockConfigs[configIndex].sourcesToInclude = input.sourcesToInclude;
		if (input.sourcesToExclude)
			this.mockConfigs[configIndex].sourcesToExclude = input.sourcesToExclude;
		if (input.locationsToInclude)
			this.mockConfigs[configIndex].locationsToInclude =
				input.locationsToInclude;
		if (input.locationsToExclude)
			this.mockConfigs[configIndex].locationsToExclude =
				input.locationsToExclude;
		if (input.biasToInclude)
			this.mockConfigs[configIndex].biasToInclude = input.biasToInclude;
		if (input.biasToExclude)
			this.mockConfigs[configIndex].biasToExclude = input.biasToExclude;
		if (input.savedArticleIds)
			this.mockConfigs[configIndex].savedArticleIds = input.savedArticleIds;

		this.mockConfigs[configIndex].updatedAt = new Date().toISOString();

		return {
			__typename: 'Config',
			...this.mockConfigs[configIndex],
		} as UpdateConfigMutation;
	}

	async DeleteConfig(input: DeleteConfigInput): Promise<DeleteConfigMutation> {
		await this.delay(400);

		const configIndex = this.mockConfigs.findIndex((c) => c.id === input.id);

		if (configIndex === -1) {
			throw new Error(`Config with ID ${input.id} not found`);
		}

		const deletedConfig = this.mockConfigs[configIndex];

		// Remove reference from user if exists
		if (deletedConfig.user) {
			const userIndex = this.mockUsers.findIndex(
				(u) => u.id === deletedConfig.user.id
			);
			if (userIndex !== -1) {
				this.mockUsers[userIndex].config = null;
			}
		}

		// Remove config
		this.mockConfigs.splice(configIndex, 1);

		return {
			__typename: 'Config',
			...deletedConfig,
		} as DeleteConfigMutation;
	}

	// Query methods
	async GetUser(id: string): Promise<GetUserQuery> {
		await this.delay(200);

		const user = this.mockUsers.find((u) => u.id === id);

		if (!user) {
			throw new Error(`User with ID ${id} not found`);
		}

		return {
			__typename: 'User',
			...user,
		} as GetUserQuery;
	}

	async ListUsers(
		filter?: ModelUserFilterInput,
		limit?: number,
		nextToken?: string
	): Promise<ListUsersQuery> {
		await this.delay(300);

		// Very simple implementation, ignoring most filter options
		let users = [...this.mockUsers];

		if (limit && limit > 0) {
			users = users.slice(0, limit);
		}

		return {
			__typename: 'ModelUserConnection',
			items: users,
			nextToken: null,
		} as ListUsersQuery;
	}

	async GetConfig(id: string): Promise<GetConfigQuery> {
		await this.delay(200);

		const config = this.mockConfigs.find((c) => c.id === id);

		if (!config) {
			throw new Error(`Config with ID ${id} not found`);
		}

		return {
			__typename: 'Config',
			...config,
		} as GetConfigQuery;
	}

	async ListConfigs(
		filter?: ModelConfigFilterInput,
		limit?: number,
		nextToken?: string
	): Promise<ListConfigsQuery> {
		await this.delay(300);

		// Simple implementation
		let configs = [...this.mockConfigs];

		if (limit && limit > 0) {
			configs = configs.slice(0, limit);
		}

		return {
			__typename: 'ModelConfigConnection',
			items: configs,
			nextToken: null,
		} as ListConfigsQuery;
	}

	async UserByOwner(
		ownerId: string,
		sortDirection?: ModelSortDirection,
		filter?: ModelUserFilterInput,
		limit?: number,
		nextToken?: string
	): Promise<UserByOwnerQuery> {
		await this.delay(250);

		const users = this.mockUsers.filter((u) => u.ownerId === ownerId);

		return {
			__typename: 'ModelUserConnection',
			items: users,
			nextToken: null,
		} as UserByOwnerQuery;
	}

	async ConfigByOwner(
		ownerId: string,
		sortDirection?: ModelSortDirection,
		filter?: ModelConfigFilterInput,
		limit?: number,
		nextToken?: string
	): Promise<ConfigByOwnerQuery> {
		await this.delay(250);

		const configs = this.mockConfigs.filter((c) => c.ownerId === ownerId);

		return {
			__typename: 'ModelConfigConnection',
			items: configs,
			nextToken: null,
		} as ConfigByOwnerQuery;
	}

	async GetArticle(id: string): Promise<GetArticleQuery> {
		await this.delay(200);

		const article = this.mockArticles.find((a) => a.id === id);

		if (!article) {
			throw new Error(`Article with ID ${id} not found`);
		}

		return {
			__typename: 'Article',
			...article,
		} as GetArticleQuery;
	}

	async ListArticles(
		filter?: ModelArticleFilterInput,
		limit?: number,
		nextToken?: string
	): Promise<ListArticlesQuery> {
		await this.delay(300);

		// Simple implementation
		let articles = [...this.mockArticles];

		if (limit && limit > 0) {
			articles = articles.slice(0, limit);
		}

		return {
			__typename: 'ModelArticleConnection',
			items: articles,
			nextToken: null,
		} as ListArticlesQuery;
	}

	// The most important method used by the news feed
	async ArticlesByDate(
		dataType?: string,
		displayDateTime?: ModelStringKeyConditionInput,
		sortDirection?: ModelSortDirection,
		filter?: ModelArticleFilterInput,
		limit?: number,
		nextToken?: string
	): Promise<ArticlesByDateQuery> {
		await this.delay(500);

		let filteredArticles = [...this.mockArticles];

		// Apply dataType filter
		if (dataType) {
			filteredArticles = filteredArticles.filter(
				(a) => a.dataType === dataType
			);
		}

		// Apply date condition if provided
		if (displayDateTime) {
			if (displayDateTime.eq) {
				filteredArticles = filteredArticles.filter(
					(a) => a.displayDateTime === displayDateTime.eq
				);
			} else if (displayDateTime.lt) {
				filteredArticles = filteredArticles.filter(
					(a) => a.displayDateTime < displayDateTime.lt
				);
			} else if (displayDateTime.gt) {
				filteredArticles = filteredArticles.filter(
					(a) => a.displayDateTime > displayDateTime.gt
				);
			} else if (displayDateTime.le) {
				filteredArticles = filteredArticles.filter(
					(a) => a.displayDateTime <= displayDateTime.le
				);
			} else if (displayDateTime.ge) {
				filteredArticles = filteredArticles.filter(
					(a) => a.displayDateTime >= displayDateTime.ge
				);
			}
		}

		// Apply additional filter conditions (simplified implementation)
		if (filter) {
			// Filter by topics if provided
			if (filter.topics && filter.topics.contains) {
				const topicFilter = filter.topics.contains;
				filteredArticles = filteredArticles.filter(
					(a) => a.topics && a.topics.some((t) => t.includes(topicFilter))
				);
			}

			// Filter by source if provided
			if (filter.sourceTitle && filter.sourceTitle.contains) {
				const sourceFilter = filter.sourceTitle.contains;
				filteredArticles = filteredArticles.filter(
					(a) => a.sourceTitle && a.sourceTitle.includes(sourceFilter)
				);
			}

			// Filter by tone if provided
			if (filter.tone) {
				if (filter.tone.ge !== null && filter.tone.ge !== undefined) {
					filteredArticles = filteredArticles.filter(
						(a) => a.tone >= filter.tone.ge
					);
				}
				if (filter.tone.le !== null && filter.tone.le !== undefined) {
					filteredArticles = filteredArticles.filter(
						(a) => a.tone <= filter.tone.le
					);
				}
			}

			// Filter by bias if provided
			if (filter.biasRating && filter.biasRating.contains) {
				const biasFilter = filter.biasRating.contains;
				filteredArticles = filteredArticles.filter(
					(a) => a.biasRating && a.biasRating.includes(biasFilter)
				);
			}

			// Filter by location/country if provided
			if (filter.sourceCountry && filter.sourceCountry.contains) {
				const countryFilter = filter.sourceCountry.contains;
				filteredArticles = filteredArticles.filter(
					(a) => a.sourceCountry && a.sourceCountry.includes(countryFilter)
				);
			}

			// Filter by keywords if provided
			if (filter.keywords && filter.keywords.contains) {
				const keywordFilter = filter.keywords.contains;
				filteredArticles = filteredArticles.filter(
					(a) => a.keywords && a.keywords.some((k) => k.includes(keywordFilter))
				);
			}
		}

		// Sort by date
		filteredArticles.sort((a, b) => {
			const dateA = new Date(a.datePublished).getTime();
			const dateB = new Date(b.datePublished).getTime();
			return sortDirection === ModelSortDirection.ASC
				? dateA - dateB
				: dateB - dateA;
		});

		// Apply limit
		if (limit && limit > 0) {
			filteredArticles = filteredArticles.slice(0, limit);
		}

		return {
			__typename: 'ModelArticleConnection',
			items: filteredArticles,
			nextToken: null,
		} as ArticlesByDateQuery;
	}
}
