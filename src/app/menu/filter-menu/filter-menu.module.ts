import { NgModule, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilterMenuComponent } from '../filter-menu/filter-menu.component';
import { WordFilterComponent } from '../filter-menu/word-filter/word-filter.component';
import { RangeFilterComponent } from '../filter-menu/range-filter/range-filter.component';
import { TopicsFilterComponent } from '../filter-menu/topics-filter/topics-filter.component';
import { TopicOptionComponent } from '../filter-menu/topics-filter/topic-option/topic-option.component';
import { CountryFilterComponent } from '../filter-menu/country-filter/country-filter.component';
import { BiasFilterComponent } from './bias-filter/bias-filter.component';
import { ButtonFilterComponent } from './bias-filter/button-filter/button-filter.component';
import { AppComponent } from 'src/app/app.component';


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
    BiasFilterComponent,
    ButtonFilterComponent
  ]
})
export class FilterMenuModule {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public resolveFilterMenuComponent(): any {
    const filterMenuFactory: ComponentFactory<FilterMenuComponent> =
    this.componentFactoryResolver.resolveComponentFactory(FilterMenuComponent);

    return filterMenuFactory;
  }
}
