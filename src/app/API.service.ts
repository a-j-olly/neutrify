/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateArticleInput = {
  id?: string | null;
  articleBody: string;
  articleDataType?: string | null;
  articleDate?: string | null;
  articleDateTime?: string | null;
  articleDateTimePub: string;
  articleEventUri?: string | null;
  articleImage?: string | null;
  articleLanguage?: string | null;
  articleSentiment?: number | null;
  articleShare?: number | null;
  articleSimilarity?: number | null;
  articleTime?: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  articleSourceId: string;
};

export type UpdateArticleInput = {
  id: string;
  articleBody?: string | null;
  articleDataType?: string | null;
  articleDate?: string | null;
  articleDateTime?: string | null;
  articleDateTimePub?: string | null;
  articleEventUri?: string | null;
  articleImage?: string | null;
  articleLanguage?: string | null;
  articleSentiment?: number | null;
  articleShare?: number | null;
  articleSimilarity?: number | null;
  articleTime?: string | null;
  articleTitle?: string | null;
  articleUri?: string | null;
  articleURL?: string | null;
  articleSourceId?: string | null;
};

export type DeleteArticleInput = {
  id?: string | null;
};

export type CreateCategoryMemberInput = {
  id?: string | null;
  categoryMemberArticleId: string;
  categoryMemberCategoryId: string;
};

export type UpdateCategoryMemberInput = {
  id: string;
  categoryMemberArticleId?: string | null;
  categoryMemberCategoryId?: string | null;
};

export type DeleteCategoryMemberInput = {
  id?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  categoryLabel: string;
  categoryUri: string;
};

export type UpdateCategoryInput = {
  id: string;
  categoryLabel?: string | null;
  categoryUri?: string | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateSourceInput = {
  id?: string | null;
  sourceUri: string;
  sourceType?: string | null;
  sourceTitle: string;
  sourceDescription?: string | null;
  sourceRanking?: number | null;
  sourceLocationId: string;
};

export type UpdateSourceInput = {
  id: string;
  sourceUri?: string | null;
  sourceType?: string | null;
  sourceTitle?: string | null;
  sourceDescription?: string | null;
  sourceRanking?: number | null;
  sourceLocationId?: string | null;
};

export type DeleteSourceInput = {
  id?: string | null;
};

export type CreateConceptMemberInput = {
  id?: string | null;
  conceptMemberArticleId: string;
  conceptMemberConceptId: string;
};

export type UpdateConceptMemberInput = {
  id: string;
  conceptMemberArticleId?: string | null;
  conceptMemberConceptId?: string | null;
};

export type DeleteConceptMemberInput = {
  id?: string | null;
};

export type CreateConceptInput = {
  id?: string | null;
  conceptLabel: string;
  conceptScore?: number | null;
  conceptUri: string;
  conceptType: string;
  conceptSynonyms?: Array<string> | null;
  conceptLocationId?: string | null;
};

export type UpdateConceptInput = {
  id: string;
  conceptLabel?: string | null;
  conceptScore?: number | null;
  conceptUri?: string | null;
  conceptType?: string | null;
  conceptSynonyms?: Array<string> | null;
  conceptLocationId?: string | null;
};

export type DeleteConceptInput = {
  id?: string | null;
};

export type CreateLocationInput = {
  id?: string | null;
  locationType: string;
  locationLabel: string;
  locationCountry?: string | null;
  locationLat?: number | null;
  locationLong?: number | null;
};

export type UpdateLocationInput = {
  id: string;
  locationType?: string | null;
  locationLabel?: string | null;
  locationCountry?: string | null;
  locationLat?: number | null;
  locationLong?: number | null;
};

export type DeleteLocationInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  userCognitoId: string;
  userIsPremium?: boolean | null;
  userUserConfigId?: string | null;
  userCustomerId?: string | null;
  userFeedbackId?: string | null;
};

export type UpdateUserInput = {
  id: string;
  userCognitoId?: string | null;
  userIsPremium?: boolean | null;
  userUserConfigId?: string | null;
  userCustomerId?: string | null;
  userFeedbackId?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateConfigMemberInput = {
  id?: string | null;
  configMemberArticleId: string;
  configMemberConceptId: string;
};

export type UpdateConfigMemberInput = {
  id: string;
  configMemberArticleId?: string | null;
  configMemberConceptId?: string | null;
};

export type DeleteConfigMemberInput = {
  id?: string | null;
};

export type CreateConfigInput = {
  id?: string | null;
  configKeywordFilter?: Array<string> | null;
  configSentimentRangeUpperBound?: number | null;
  configSentimentRangeLowerBound?: number | null;
  configStoryNeutralityThreshold?: number | null;
  configUserId?: string | null;
};

export type UpdateConfigInput = {
  id: string;
  configKeywordFilter?: Array<string> | null;
  configSentimentRangeUpperBound?: number | null;
  configSentimentRangeLowerBound?: number | null;
  configStoryNeutralityThreshold?: number | null;
  configUserId?: string | null;
};

export type DeleteConfigInput = {
  id?: string | null;
};

export type CreateCustomerInput = {
  id?: string | null;
  customerUserCognitoId: string;
  customerUsername?: string | null;
  customerEmail: string;
  customerBillingFullName?: string | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate?: string | null;
  customerFreeTrailEndDate?: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate?: string | null;
  customerPremiumEndDate?: string | null;
  customerPremiumIsExpiring?: boolean | null;
  customerIsActive?: boolean | null;
  customerLastLogin?: string | null;
  customerUserId?: string | null;
};

export type UpdateCustomerInput = {
  id: string;
  customerUserCognitoId?: string | null;
  customerUsername?: string | null;
  customerEmail?: string | null;
  customerBillingFullName?: string | null;
  customerFreeTrial?: boolean | null;
  customerFreeTrailStartDate?: string | null;
  customerFreeTrailEndDate?: string | null;
  customerIsPremium?: boolean | null;
  customerPremiumStartDate?: string | null;
  customerPremiumEndDate?: string | null;
  customerPremiumIsExpiring?: boolean | null;
  customerIsActive?: boolean | null;
  customerLastLogin?: string | null;
  customerUserId?: string | null;
};

export type DeleteCustomerInput = {
  id?: string | null;
};

export type CreateBillingAddressInput = {
  id?: string | null;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  billingAddressCustomerId?: string | null;
};

export type UpdateBillingAddressInput = {
  id: string;
  billingAddressHouseNo?: string | null;
  billingAddressStreet?: string | null;
  billingAddressCity?: string | null;
  billingAddressPostalCode?: string | null;
  billingAddressCustomerId?: string | null;
};

export type DeleteBillingAddressInput = {
  id?: string | null;
};

export type CreateFeedbackInput = {
  id?: string | null;
  userFeedbackPromoterScore?: number | null;
  userFeedbackDiscovery?: string | null;
  userFeedbackLeaveReason?: string | null;
  feedbackUserId?: string | null;
};

export type UpdateFeedbackInput = {
  id: string;
  userFeedbackPromoterScore?: number | null;
  userFeedbackDiscovery?: string | null;
  userFeedbackLeaveReason?: string | null;
  feedbackUserId?: string | null;
};

export type DeleteFeedbackInput = {
  id?: string | null;
};

export type ModelArticleFilterInput = {
  id?: ModelIDFilterInput | null;
  articleBody?: ModelStringFilterInput | null;
  articleDataType?: ModelStringFilterInput | null;
  articleDate?: ModelStringFilterInput | null;
  articleDateTime?: ModelStringFilterInput | null;
  articleDateTimePub?: ModelStringFilterInput | null;
  articleEventUri?: ModelStringFilterInput | null;
  articleImage?: ModelStringFilterInput | null;
  articleLanguage?: ModelStringFilterInput | null;
  articleSentiment?: ModelFloatFilterInput | null;
  articleShare?: ModelIntFilterInput | null;
  articleSimilarity?: ModelFloatFilterInput | null;
  articleTime?: ModelStringFilterInput | null;
  articleTitle?: ModelStringFilterInput | null;
  articleUri?: ModelStringFilterInput | null;
  articleURL?: ModelStringFilterInput | null;
  and?: Array<ModelArticleFilterInput | null> | null;
  or?: Array<ModelArticleFilterInput | null> | null;
  not?: ModelArticleFilterInput | null;
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

export type ModelFloatFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDFilterInput | null;
  categoryLabel?: ModelStringFilterInput | null;
  categoryUri?: ModelStringFilterInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelSourceFilterInput = {
  id?: ModelIDFilterInput | null;
  sourceUri?: ModelStringFilterInput | null;
  sourceType?: ModelStringFilterInput | null;
  sourceTitle?: ModelStringFilterInput | null;
  sourceDescription?: ModelStringFilterInput | null;
  sourceRanking?: ModelIntFilterInput | null;
  and?: Array<ModelSourceFilterInput | null> | null;
  or?: Array<ModelSourceFilterInput | null> | null;
  not?: ModelSourceFilterInput | null;
};

export type ModelConceptFilterInput = {
  id?: ModelIDFilterInput | null;
  conceptLabel?: ModelStringFilterInput | null;
  conceptScore?: ModelIntFilterInput | null;
  conceptUri?: ModelStringFilterInput | null;
  conceptType?: ModelStringFilterInput | null;
  conceptSynonyms?: ModelStringFilterInput | null;
  and?: Array<ModelConceptFilterInput | null> | null;
  or?: Array<ModelConceptFilterInput | null> | null;
  not?: ModelConceptFilterInput | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDFilterInput | null;
  locationType?: ModelStringFilterInput | null;
  locationLabel?: ModelStringFilterInput | null;
  locationCountry?: ModelStringFilterInput | null;
  locationLat?: ModelFloatFilterInput | null;
  locationLong?: ModelFloatFilterInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  userCognitoId?: ModelStringFilterInput | null;
  userIsPremium?: ModelBooleanFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelConfigFilterInput = {
  id?: ModelIDFilterInput | null;
  configKeywordFilter?: ModelStringFilterInput | null;
  configSentimentRangeUpperBound?: ModelFloatFilterInput | null;
  configSentimentRangeLowerBound?: ModelFloatFilterInput | null;
  configStoryNeutralityThreshold?: ModelFloatFilterInput | null;
  and?: Array<ModelConfigFilterInput | null> | null;
  or?: Array<ModelConfigFilterInput | null> | null;
  not?: ModelConfigFilterInput | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDFilterInput | null;
  customerUserCognitoId?: ModelStringFilterInput | null;
  customerUsername?: ModelStringFilterInput | null;
  customerEmail?: ModelStringFilterInput | null;
  customerBillingFullName?: ModelStringFilterInput | null;
  customerFreeTrial?: ModelBooleanFilterInput | null;
  customerFreeTrailStartDate?: ModelStringFilterInput | null;
  customerFreeTrailEndDate?: ModelStringFilterInput | null;
  customerIsPremium?: ModelBooleanFilterInput | null;
  customerPremiumStartDate?: ModelStringFilterInput | null;
  customerPremiumEndDate?: ModelStringFilterInput | null;
  customerPremiumIsExpiring?: ModelBooleanFilterInput | null;
  customerIsActive?: ModelBooleanFilterInput | null;
  customerLastLogin?: ModelStringFilterInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export type ModelBillingAddressFilterInput = {
  id?: ModelIDFilterInput | null;
  billingAddressHouseNo?: ModelStringFilterInput | null;
  billingAddressStreet?: ModelStringFilterInput | null;
  billingAddressCity?: ModelStringFilterInput | null;
  billingAddressPostalCode?: ModelStringFilterInput | null;
  and?: Array<ModelBillingAddressFilterInput | null> | null;
  or?: Array<ModelBillingAddressFilterInput | null> | null;
  not?: ModelBillingAddressFilterInput | null;
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDFilterInput | null;
  userFeedbackPromoterScore?: ModelIntFilterInput | null;
  userFeedbackDiscovery?: ModelStringFilterInput | null;
  userFeedbackLeaveReason?: ModelStringFilterInput | null;
  and?: Array<ModelFeedbackFilterInput | null> | null;
  or?: Array<ModelFeedbackFilterInput | null> | null;
  not?: ModelFeedbackFilterInput | null;
};

export type CreateArticleMutation = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateArticleMutation = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteArticleMutation = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateCategoryMemberMutation = {
  __typename: "CategoryMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  category: {
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateCategoryMemberMutation = {
  __typename: "CategoryMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  category: {
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteCategoryMemberMutation = {
  __typename: "CategoryMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  category: {
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateSourceMutation = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateSourceMutation = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteSourceMutation = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateConceptMemberMutation = {
  __typename: "ConceptMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateConceptMemberMutation = {
  __typename: "ConceptMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteConceptMemberMutation = {
  __typename: "ConceptMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateConceptMutation = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateConceptMutation = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteConceptMutation = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type CreateConfigMemberMutation = {
  __typename: "ConfigMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  };
};

export type UpdateConfigMemberMutation = {
  __typename: "ConfigMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  };
};

export type DeleteConfigMemberMutation = {
  __typename: "ConfigMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  };
};

export type CreateConfigMutation = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type UpdateConfigMutation = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type DeleteConfigMutation = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type CreateBillingAddressMutation = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type UpdateBillingAddressMutation = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type DeleteBillingAddressMutation = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type CreateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type UpdateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type DeleteFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type GetArticleQuery = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListArticlesQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListCategorysQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetSourceQuery = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListSourcesQuery = {
  __typename: "ModelSourceConnection";
  items: Array<{
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetConceptQuery = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListConceptsQuery = {
  __typename: "ModelConceptConnection";
  items: Array<{
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetConfigQuery = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type ListConfigsQuery = {
  __typename: "ModelConfigConnection";
  items: Array<{
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCustomerQuery = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBillingAddressQuery = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type ListBillingAddresssQuery = {
  __typename: "ModelBillingAddressConnection";
  items: Array<{
    __typename: "BillingAddress";
    id: string;
    billingAddressHouseNo: string;
    billingAddressStreet: string;
    billingAddressCity: string;
    billingAddressPostalCode: string;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetFeedbackQuery = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type ListFeedbacksQuery = {
  __typename: "ModelFeedbackConnection";
  items: Array<{
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateArticleSubscription = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateArticleSubscription = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteArticleSubscription = {
  __typename: "Article";
  id: string;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDateTimePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleSentiment: number | null;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleTime: string | null;
  articleTitle: string;
  articleUri: string;
  articleURL: string;
  source: {
    __typename: "Source";
    id: string;
    sourceUri: string;
    sourceType: string | null;
    sourceTitle: string;
    sourceDescription: string | null;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceRanking: number | null;
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
  };
  categories: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  concepts: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCategoryMemberSubscription = {
  __typename: "CategoryMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  category: {
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateCategoryMemberSubscription = {
  __typename: "CategoryMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  category: {
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteCategoryMemberSubscription = {
  __typename: "CategoryMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  category: {
    __typename: "Category";
    id: string;
    categoryLabel: string;
    categoryUri: string;
    articles: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  categoryLabel: string;
  categoryUri: string;
  articles: {
    __typename: "ModelCategoryMemberConnection";
    items: Array<{
      __typename: "CategoryMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateSourceSubscription = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateSourceSubscription = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteSourceSubscription = {
  __typename: "Source";
  id: string;
  sourceUri: string;
  sourceType: string | null;
  sourceTitle: string;
  sourceDescription: string | null;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceRanking: number | null;
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      id: string;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDateTimePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleSentiment: number | null;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleTime: string | null;
      articleTitle: string;
      articleUri: string;
      articleURL: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateConceptMemberSubscription = {
  __typename: "ConceptMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateConceptMemberSubscription = {
  __typename: "ConceptMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteConceptMemberSubscription = {
  __typename: "ConceptMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Concept";
    id: string;
    conceptLabel: string;
    conceptScore: number | null;
    conceptUri: string;
    conceptType: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    } | null;
    conceptSynonyms: Array<string> | null;
    articles: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateConceptSubscription = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateConceptSubscription = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteConceptSubscription = {
  __typename: "Concept";
  id: string;
  conceptLabel: string;
  conceptScore: number | null;
  conceptUri: string;
  conceptType: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    concepts: {
      __typename: "ModelConceptConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
  conceptSynonyms: Array<string> | null;
  articles: {
    __typename: "ModelConceptMemberConnection";
    items: Array<{
      __typename: "ConceptMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  locationType: string;
  locationLabel: string;
  locationCountry: string | null;
  locationLat: number | null;
  locationLong: number | null;
  concepts: {
    __typename: "ModelConceptConnection";
    items: Array<{
      __typename: "Concept";
      id: string;
      conceptLabel: string;
      conceptScore: number | null;
      conceptUri: string;
      conceptType: string;
      conceptSynonyms: Array<string> | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  feedback: {
    __typename: "Feedback";
    id: string;
    userFeedbackPromoterScore: number | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type OnCreateConfigMemberSubscription = {
  __typename: "ConfigMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  };
};

export type OnUpdateConfigMemberSubscription = {
  __typename: "ConfigMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  };
};

export type OnDeleteConfigMemberSubscription = {
  __typename: "ConfigMember";
  id: string;
  article: {
    __typename: "Article";
    id: string;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDateTimePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleSentiment: number | null;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleTime: string | null;
    articleTitle: string;
    articleUri: string;
    articleURL: string;
    source: {
      __typename: "Source";
      id: string;
      sourceUri: string;
      sourceType: string | null;
      sourceTitle: string;
      sourceDescription: string | null;
      sourceRanking: number | null;
    };
    categories: {
      __typename: "ModelCategoryMemberConnection";
      nextToken: string | null;
    } | null;
    concepts: {
      __typename: "ModelConceptMemberConnection";
      nextToken: string | null;
    } | null;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
  };
  concept: {
    __typename: "Config";
    id: string;
    configKeywordFilter: Array<string> | null;
    configSentimentRangeUpperBound: number | null;
    configSentimentRangeLowerBound: number | null;
    configStoryNeutralityThreshold: number | null;
    savedArticles: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  };
};

export type OnCreateConfigSubscription = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnUpdateConfigSubscription = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnDeleteConfigSubscription = {
  __typename: "Config";
  id: string;
  configKeywordFilter: Array<string> | null;
  configSentimentRangeUpperBound: number | null;
  configSentimentRangeLowerBound: number | null;
  configStoryNeutralityThreshold: number | null;
  savedArticles: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnCreateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnUpdateCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnDeleteCustomerSubscription = {
  __typename: "Customer";
  id: string;
  customerUserCognitoId: string;
  customerUsername: string | null;
  customerEmail: string;
  customerBillingFullName: string | null;
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      id: string;
      billingAddressHouseNo: string;
      billingAddressStreet: string;
      billingAddressCity: string;
      billingAddressPostalCode: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerIsPremium: boolean;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnCreateBillingAddressSubscription = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type OnUpdateBillingAddressSubscription = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type OnDeleteBillingAddressSubscription = {
  __typename: "BillingAddress";
  id: string;
  billingAddressHouseNo: string;
  billingAddressStreet: string;
  billingAddressCity: string;
  billingAddressPostalCode: string;
  customer: {
    __typename: "Customer";
    id: string;
    customerUserCognitoId: string;
    customerUsername: string | null;
    customerEmail: string;
    customerBillingFullName: string | null;
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerIsPremium: boolean;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
};

export type OnCreateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnUpdateFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

export type OnDeleteFeedbackSubscription = {
  __typename: "Feedback";
  id: string;
  userFeedbackPromoterScore: number | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  user: {
    __typename: "User";
    id: string;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      configKeywordFilter: Array<string> | null;
      configSentimentRangeUpperBound: number | null;
      configSentimentRangeLowerBound: number | null;
      configStoryNeutralityThreshold: number | null;
    } | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerUserCognitoId: string;
      customerUsername: string | null;
      customerEmail: string;
      customerBillingFullName: string | null;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerIsPremium: boolean;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
    } | null;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackPromoterScore: number | null;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateArticle(
    input: CreateArticleInput
  ): Promise<CreateArticleMutation> {
    const statement = `mutation CreateArticle($input: CreateArticleInput!) {
        createArticle(input: $input) {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateArticleMutation>response.data.createArticle;
  }
  async UpdateArticle(
    input: UpdateArticleInput
  ): Promise<UpdateArticleMutation> {
    const statement = `mutation UpdateArticle($input: UpdateArticleInput!) {
        updateArticle(input: $input) {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateArticleMutation>response.data.updateArticle;
  }
  async DeleteArticle(
    input: DeleteArticleInput
  ): Promise<DeleteArticleMutation> {
    const statement = `mutation DeleteArticle($input: DeleteArticleInput!) {
        deleteArticle(input: $input) {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteArticleMutation>response.data.deleteArticle;
  }
  async CreateCategoryMember(
    input: CreateCategoryMemberInput
  ): Promise<CreateCategoryMemberMutation> {
    const statement = `mutation CreateCategoryMember($input: CreateCategoryMemberInput!) {
        createCategoryMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          category {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMemberMutation>response.data.createCategoryMember;
  }
  async UpdateCategoryMember(
    input: UpdateCategoryMemberInput
  ): Promise<UpdateCategoryMemberMutation> {
    const statement = `mutation UpdateCategoryMember($input: UpdateCategoryMemberInput!) {
        updateCategoryMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          category {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMemberMutation>response.data.updateCategoryMember;
  }
  async DeleteCategoryMember(
    input: DeleteCategoryMemberInput
  ): Promise<DeleteCategoryMemberMutation> {
    const statement = `mutation DeleteCategoryMember($input: DeleteCategoryMemberInput!) {
        deleteCategoryMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          category {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMemberMutation>response.data.deleteCategoryMember;
  }
  async CreateCategory(
    input: CreateCategoryInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!) {
        createCategory(input: $input) {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!) {
        updateCategory(input: $input) {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!) {
        deleteCategory(input: $input) {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateSource(input: CreateSourceInput): Promise<CreateSourceMutation> {
    const statement = `mutation CreateSource($input: CreateSourceInput!) {
        createSource(input: $input) {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSourceMutation>response.data.createSource;
  }
  async UpdateSource(input: UpdateSourceInput): Promise<UpdateSourceMutation> {
    const statement = `mutation UpdateSource($input: UpdateSourceInput!) {
        updateSource(input: $input) {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSourceMutation>response.data.updateSource;
  }
  async DeleteSource(input: DeleteSourceInput): Promise<DeleteSourceMutation> {
    const statement = `mutation DeleteSource($input: DeleteSourceInput!) {
        deleteSource(input: $input) {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSourceMutation>response.data.deleteSource;
  }
  async CreateConceptMember(
    input: CreateConceptMemberInput
  ): Promise<CreateConceptMemberMutation> {
    const statement = `mutation CreateConceptMember($input: CreateConceptMemberInput!) {
        createConceptMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConceptMemberMutation>response.data.createConceptMember;
  }
  async UpdateConceptMember(
    input: UpdateConceptMemberInput
  ): Promise<UpdateConceptMemberMutation> {
    const statement = `mutation UpdateConceptMember($input: UpdateConceptMemberInput!) {
        updateConceptMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConceptMemberMutation>response.data.updateConceptMember;
  }
  async DeleteConceptMember(
    input: DeleteConceptMemberInput
  ): Promise<DeleteConceptMemberMutation> {
    const statement = `mutation DeleteConceptMember($input: DeleteConceptMemberInput!) {
        deleteConceptMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConceptMemberMutation>response.data.deleteConceptMember;
  }
  async CreateConcept(
    input: CreateConceptInput
  ): Promise<CreateConceptMutation> {
    const statement = `mutation CreateConcept($input: CreateConceptInput!) {
        createConcept(input: $input) {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConceptMutation>response.data.createConcept;
  }
  async UpdateConcept(
    input: UpdateConceptInput
  ): Promise<UpdateConceptMutation> {
    const statement = `mutation UpdateConcept($input: UpdateConceptInput!) {
        updateConcept(input: $input) {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConceptMutation>response.data.updateConcept;
  }
  async DeleteConcept(
    input: DeleteConceptInput
  ): Promise<DeleteConceptMutation> {
    const statement = `mutation DeleteConcept($input: DeleteConceptInput!) {
        deleteConcept(input: $input) {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConceptMutation>response.data.deleteConcept;
  }
  async CreateLocation(
    input: CreateLocationInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!) {
        createLocation(input: $input) {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!) {
        updateLocation(input: $input) {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!) {
        deleteLocation(input: $input) {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateConfigMember(
    input: CreateConfigMemberInput
  ): Promise<CreateConfigMemberMutation> {
    const statement = `mutation CreateConfigMember($input: CreateConfigMemberInput!) {
        createConfigMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConfigMemberMutation>response.data.createConfigMember;
  }
  async UpdateConfigMember(
    input: UpdateConfigMemberInput
  ): Promise<UpdateConfigMemberMutation> {
    const statement = `mutation UpdateConfigMember($input: UpdateConfigMemberInput!) {
        updateConfigMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConfigMemberMutation>response.data.updateConfigMember;
  }
  async DeleteConfigMember(
    input: DeleteConfigMemberInput
  ): Promise<DeleteConfigMemberMutation> {
    const statement = `mutation DeleteConfigMember($input: DeleteConfigMemberInput!) {
        deleteConfigMember(input: $input) {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConfigMemberMutation>response.data.deleteConfigMember;
  }
  async CreateConfig(input: CreateConfigInput): Promise<CreateConfigMutation> {
    const statement = `mutation CreateConfig($input: CreateConfigInput!) {
        createConfig(input: $input) {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateConfigMutation>response.data.createConfig;
  }
  async UpdateConfig(input: UpdateConfigInput): Promise<UpdateConfigMutation> {
    const statement = `mutation UpdateConfig($input: UpdateConfigInput!) {
        updateConfig(input: $input) {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConfigMutation>response.data.updateConfig;
  }
  async DeleteConfig(input: DeleteConfigInput): Promise<DeleteConfigMutation> {
    const statement = `mutation DeleteConfig($input: DeleteConfigInput!) {
        deleteConfig(input: $input) {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteConfigMutation>response.data.deleteConfig;
  }
  async CreateCustomer(
    input: CreateCustomerInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCustomerMutation>response.data.createCustomer;
  }
  async UpdateCustomer(
    input: UpdateCustomerInput
  ): Promise<UpdateCustomerMutation> {
    const statement = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
        updateCustomer(input: $input) {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCustomerMutation>response.data.updateCustomer;
  }
  async DeleteCustomer(
    input: DeleteCustomerInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
        deleteCustomer(input: $input) {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCustomerMutation>response.data.deleteCustomer;
  }
  async CreateBillingAddress(
    input: CreateBillingAddressInput
  ): Promise<CreateBillingAddressMutation> {
    const statement = `mutation CreateBillingAddress($input: CreateBillingAddressInput!) {
        createBillingAddress(input: $input) {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBillingAddressMutation>response.data.createBillingAddress;
  }
  async UpdateBillingAddress(
    input: UpdateBillingAddressInput
  ): Promise<UpdateBillingAddressMutation> {
    const statement = `mutation UpdateBillingAddress($input: UpdateBillingAddressInput!) {
        updateBillingAddress(input: $input) {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBillingAddressMutation>response.data.updateBillingAddress;
  }
  async DeleteBillingAddress(
    input: DeleteBillingAddressInput
  ): Promise<DeleteBillingAddressMutation> {
    const statement = `mutation DeleteBillingAddress($input: DeleteBillingAddressInput!) {
        deleteBillingAddress(input: $input) {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBillingAddressMutation>response.data.deleteBillingAddress;
  }
  async CreateFeedback(
    input: CreateFeedbackInput
  ): Promise<CreateFeedbackMutation> {
    const statement = `mutation CreateFeedback($input: CreateFeedbackInput!) {
        createFeedback(input: $input) {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFeedbackMutation>response.data.createFeedback;
  }
  async UpdateFeedback(
    input: UpdateFeedbackInput
  ): Promise<UpdateFeedbackMutation> {
    const statement = `mutation UpdateFeedback($input: UpdateFeedbackInput!) {
        updateFeedback(input: $input) {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFeedbackMutation>response.data.updateFeedback;
  }
  async DeleteFeedback(
    input: DeleteFeedbackInput
  ): Promise<DeleteFeedbackMutation> {
    const statement = `mutation DeleteFeedback($input: DeleteFeedbackInput!) {
        deleteFeedback(input: $input) {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFeedbackMutation>response.data.deleteFeedback;
  }
  async GetArticle(id: string): Promise<GetArticleQuery> {
    const statement = `query GetArticle($id: ID!) {
        getArticle(id: $id) {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetArticleQuery>response.data.getArticle;
  }
  async ListArticles(
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListArticlesQuery> {
    const statement = `query ListArticles($filter: ModelArticleFilterInput, $limit: Int, $nextToken: String) {
        listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArticlesQuery>response.data.listArticles;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategorys(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategorysQuery> {
    const statement = `query ListCategorys($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategorysQuery>response.data.listCategorys;
  }
  async GetSource(id: string): Promise<GetSourceQuery> {
    const statement = `query GetSource($id: ID!) {
        getSource(id: $id) {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSourceQuery>response.data.getSource;
  }
  async ListSources(
    filter?: ModelSourceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSourcesQuery> {
    const statement = `query ListSources($filter: ModelSourceFilterInput, $limit: Int, $nextToken: String) {
        listSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSourcesQuery>response.data.listSources;
  }
  async GetConcept(id: string): Promise<GetConceptQuery> {
    const statement = `query GetConcept($id: ID!) {
        getConcept(id: $id) {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetConceptQuery>response.data.getConcept;
  }
  async ListConcepts(
    filter?: ModelConceptFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListConceptsQuery> {
    const statement = `query ListConcepts($filter: ModelConceptFilterInput, $limit: Int, $nextToken: String) {
        listConcepts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListConceptsQuery>response.data.listConcepts;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetConfig(id: string): Promise<GetConfigQuery> {
    const statement = `query GetConfig($id: ID!) {
        getConfig(id: $id) {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetConfigQuery>response.data.getConfig;
  }
  async ListConfigs(
    filter?: ModelConfigFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListConfigsQuery> {
    const statement = `query ListConfigs($filter: ModelConfigFilterInput, $limit: Int, $nextToken: String) {
        listConfigs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListConfigsQuery>response.data.listConfigs;
  }
  async GetCustomer(id: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCustomerQuery>response.data.getCustomer;
  }
  async ListCustomers(
    filter?: ModelCustomerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCustomersQuery> {
    const statement = `query ListCustomers($filter: ModelCustomerFilterInput, $limit: Int, $nextToken: String) {
        listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCustomersQuery>response.data.listCustomers;
  }
  async GetBillingAddress(id: string): Promise<GetBillingAddressQuery> {
    const statement = `query GetBillingAddress($id: ID!) {
        getBillingAddress(id: $id) {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBillingAddressQuery>response.data.getBillingAddress;
  }
  async ListBillingAddresss(
    filter?: ModelBillingAddressFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBillingAddresssQuery> {
    const statement = `query ListBillingAddresss($filter: ModelBillingAddressFilterInput, $limit: Int, $nextToken: String) {
        listBillingAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            billingAddressHouseNo
            billingAddressStreet
            billingAddressCity
            billingAddressPostalCode
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBillingAddresssQuery>response.data.listBillingAddresss;
  }
  async GetFeedback(id: string): Promise<GetFeedbackQuery> {
    const statement = `query GetFeedback($id: ID!) {
        getFeedback(id: $id) {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFeedbackQuery>response.data.getFeedback;
  }
  async ListFeedbacks(
    filter?: ModelFeedbackFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFeedbacksQuery> {
    const statement = `query ListFeedbacks($filter: ModelFeedbackFilterInput, $limit: Int, $nextToken: String) {
        listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFeedbacksQuery>response.data.listFeedbacks;
  }
  OnCreateArticleListener: Observable<
    OnCreateArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateArticle {
        onCreateArticle {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateArticleSubscription>;

  OnUpdateArticleListener: Observable<
    OnUpdateArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateArticle {
        onUpdateArticle {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateArticleSubscription>;

  OnDeleteArticleListener: Observable<
    OnDeleteArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteArticle {
        onDeleteArticle {
          __typename
          id
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDateTimePub
          articleEventUri
          articleImage
          articleLanguage
          articleSentiment
          articleShare
          articleSimilarity
          articleTime
          articleTitle
          articleUri
          articleURL
          source {
            __typename
            id
            sourceUri
            sourceType
            sourceTitle
            sourceDescription
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceRanking
            articles {
              __typename
              nextToken
            }
          }
          categories {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          concepts {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteArticleSubscription>;

  OnCreateCategoryMemberListener: Observable<
    OnCreateCategoryMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategoryMember {
        onCreateCategoryMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          category {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateCategoryMemberSubscription>;

  OnUpdateCategoryMemberListener: Observable<
    OnUpdateCategoryMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategoryMember {
        onUpdateCategoryMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          category {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateCategoryMemberSubscription>;

  OnDeleteCategoryMemberListener: Observable<
    OnDeleteCategoryMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategoryMember {
        onDeleteCategoryMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          category {
            __typename
            id
            categoryLabel
            categoryUri
            articles {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteCategoryMemberSubscription>;

  OnCreateCategoryListener: Observable<
    OnCreateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCategory {
        onCreateCategory {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateCategorySubscription>;

  OnUpdateCategoryListener: Observable<
    OnUpdateCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCategory {
        onUpdateCategory {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateCategorySubscription>;

  OnDeleteCategoryListener: Observable<
    OnDeleteCategorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCategory {
        onDeleteCategory {
          __typename
          id
          categoryLabel
          categoryUri
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteCategorySubscription>;

  OnCreateSourceListener: Observable<OnCreateSourceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSource {
        onCreateSource {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateSourceSubscription>;

  OnUpdateSourceListener: Observable<OnUpdateSourceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSource {
        onUpdateSource {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateSourceSubscription>;

  OnDeleteSourceListener: Observable<OnDeleteSourceSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSource {
        onDeleteSource {
          __typename
          id
          sourceUri
          sourceType
          sourceTitle
          sourceDescription
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceRanking
          articles {
            __typename
            items {
              __typename
              id
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDateTimePub
              articleEventUri
              articleImage
              articleLanguage
              articleSentiment
              articleShare
              articleSimilarity
              articleTime
              articleTitle
              articleUri
              articleURL
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteSourceSubscription>;

  OnCreateConceptMemberListener: Observable<
    OnCreateConceptMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConceptMember {
        onCreateConceptMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateConceptMemberSubscription>;

  OnUpdateConceptMemberListener: Observable<
    OnUpdateConceptMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConceptMember {
        onUpdateConceptMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateConceptMemberSubscription>;

  OnDeleteConceptMemberListener: Observable<
    OnDeleteConceptMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConceptMember {
        onDeleteConceptMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            conceptLabel
            conceptScore
            conceptUri
            conceptType
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            conceptSynonyms
            articles {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteConceptMemberSubscription>;

  OnCreateConceptListener: Observable<
    OnCreateConceptSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConcept {
        onCreateConcept {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateConceptSubscription>;

  OnUpdateConceptListener: Observable<
    OnUpdateConceptSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConcept {
        onUpdateConcept {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateConceptSubscription>;

  OnDeleteConceptListener: Observable<
    OnDeleteConceptSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConcept {
        onDeleteConcept {
          __typename
          id
          conceptLabel
          conceptScore
          conceptUri
          conceptType
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            concepts {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          conceptSynonyms
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteConceptSubscription>;

  OnCreateLocationListener: Observable<
    OnCreateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocation {
        onCreateLocation {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateLocationSubscription>;

  OnUpdateLocationListener: Observable<
    OnUpdateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocation {
        onUpdateLocation {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateLocationSubscription>;

  OnDeleteLocationListener: Observable<
    OnDeleteLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocation {
        onDeleteLocation {
          __typename
          id
          locationType
          locationLabel
          locationCountry
          locationLat
          locationLong
          concepts {
            __typename
            items {
              __typename
              id
              conceptLabel
              conceptScore
              conceptUri
              conceptType
              conceptSynonyms
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteLocationSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          feedback {
            __typename
            id
            userFeedbackPromoterScore
            userFeedbackDiscovery
            userFeedbackLeaveReason
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateConfigMemberListener: Observable<
    OnCreateConfigMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConfigMember {
        onCreateConfigMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateConfigMemberSubscription>;

  OnUpdateConfigMemberListener: Observable<
    OnUpdateConfigMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConfigMember {
        onUpdateConfigMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateConfigMemberSubscription>;

  OnDeleteConfigMemberListener: Observable<
    OnDeleteConfigMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConfigMember {
        onDeleteConfigMember {
          __typename
          id
          article {
            __typename
            id
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDateTimePub
            articleEventUri
            articleImage
            articleLanguage
            articleSentiment
            articleShare
            articleSimilarity
            articleTime
            articleTitle
            articleUri
            articleURL
            source {
              __typename
              id
              sourceUri
              sourceType
              sourceTitle
              sourceDescription
              sourceRanking
            }
            categories {
              __typename
              nextToken
            }
            concepts {
              __typename
              nextToken
            }
            configs {
              __typename
              nextToken
            }
          }
          concept {
            __typename
            id
            configKeywordFilter
            configSentimentRangeUpperBound
            configSentimentRangeLowerBound
            configStoryNeutralityThreshold
            savedArticles {
              __typename
              nextToken
            }
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteConfigMemberSubscription>;

  OnCreateConfigListener: Observable<OnCreateConfigSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateConfig {
        onCreateConfig {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateConfigSubscription>;

  OnUpdateConfigListener: Observable<OnUpdateConfigSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConfig {
        onUpdateConfig {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateConfigSubscription>;

  OnDeleteConfigListener: Observable<OnDeleteConfigSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConfig {
        onDeleteConfig {
          __typename
          id
          configKeywordFilter
          configSentimentRangeUpperBound
          configSentimentRangeLowerBound
          configStoryNeutralityThreshold
          savedArticles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteConfigSubscription>;

  OnCreateCustomerListener: Observable<
    OnCreateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateCustomerSubscription>;

  OnUpdateCustomerListener: Observable<
    OnUpdateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCustomer {
        onUpdateCustomer {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateCustomerSubscription>;

  OnDeleteCustomerListener: Observable<
    OnDeleteCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCustomer {
        onDeleteCustomer {
          __typename
          id
          customerUserCognitoId
          customerUsername
          customerEmail
          customerBillingFullName
          billingAddresses {
            __typename
            items {
              __typename
              id
              billingAddressHouseNo
              billingAddressStreet
              billingAddressCity
              billingAddressPostalCode
            }
            nextToken
          }
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerIsPremium
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerIsActive
          customerLastLogin
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteCustomerSubscription>;

  OnCreateBillingAddressListener: Observable<
    OnCreateBillingAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBillingAddress {
        onCreateBillingAddress {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateBillingAddressSubscription>;

  OnUpdateBillingAddressListener: Observable<
    OnUpdateBillingAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBillingAddress {
        onUpdateBillingAddress {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateBillingAddressSubscription>;

  OnDeleteBillingAddressListener: Observable<
    OnDeleteBillingAddressSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBillingAddress {
        onDeleteBillingAddress {
          __typename
          id
          billingAddressHouseNo
          billingAddressStreet
          billingAddressCity
          billingAddressPostalCode
          customer {
            __typename
            id
            customerUserCognitoId
            customerUsername
            customerEmail
            customerBillingFullName
            billingAddresses {
              __typename
              nextToken
            }
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerIsPremium
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerIsActive
            customerLastLogin
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteBillingAddressSubscription>;

  OnCreateFeedbackListener: Observable<
    OnCreateFeedbackSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFeedback {
        onCreateFeedback {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateFeedbackSubscription>;

  OnUpdateFeedbackListener: Observable<
    OnUpdateFeedbackSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateFeedback {
        onUpdateFeedback {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateFeedbackSubscription>;

  OnDeleteFeedbackListener: Observable<
    OnDeleteFeedbackSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteFeedback {
        onDeleteFeedback {
          __typename
          id
          userFeedbackPromoterScore
          userFeedbackDiscovery
          userFeedbackLeaveReason
          user {
            __typename
            id
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              configKeywordFilter
              configSentimentRangeUpperBound
              configSentimentRangeLowerBound
              configStoryNeutralityThreshold
            }
            customer {
              __typename
              id
              customerUserCognitoId
              customerUsername
              customerEmail
              customerBillingFullName
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerIsPremium
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerIsActive
              customerLastLogin
            }
            feedback {
              __typename
              id
              userFeedbackPromoterScore
              userFeedbackDiscovery
              userFeedbackLeaveReason
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteFeedbackSubscription>;
}
