import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { WordFilterComponent } from './filter-menu/word-filter/word-filter.component';
import { RangeFilterComponent } from './filter-menu/range-filter/range-filter.component';
import { TopicsFilterComponent } from './filter-menu/topics-filter/topics-filter.component';
import { TopicOptionComponent } from './filter-menu/topics-filter/topic-option/topic-option.component';
import { CountryFilterComponent } from './filter-menu/country-filter/country-filter.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [
    FilterMenuComponent,
    WordFilterComponent,
    RangeFilterComponent,
    TopicsFilterComponent,
    TopicOptionComponent,
    CountryFilterComponent,
    MainMenuComponent
  ]
})
export class MenuComponentModule {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveComponents(): any {
    const filterMenuFactory: ComponentFactory<FilterMenuComponent> = this.componentFactoryResolver.resolveComponentFactory(FilterMenuComponent);
    const mainMenuFactory: ComponentFactory<MainMenuComponent> = this.componentFactoryResolver.resolveComponentFactory(MainMenuComponent);

    return { filterMenuFactory, mainMenuFactory };
  }
}