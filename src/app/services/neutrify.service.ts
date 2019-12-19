/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateArticleInput = {
  articleAuthors?: Array<string | null> | null;
  articleBody: string;
  articleDataType?: string | null;
  articleDate?: string | null;
  articleDateTime?: string | null;
  articleDatePub: string;
  articleEventUri?: string | null;
  articleImage?: string | null;
  articleLanguage?: string | null;
  articleQuality: number;
  articleShare?: number | null;
  articleSimilarity?: number | null;
  articleSourceId: string;
  articleTime?: string | null;
  articleTitle: string;
  articleTone: number;
  articleUri: string;
  articleUrl: string;
  articleWordCount: number;
  id: string;
};

export type UpdateArticleInput = {
  articleAuthors?: Array<string | null> | null;
  articleBody?: string | null;
  articleDataType?: string | null;
  articleDate?: string | null;
  articleDateTime?: string | null;
  articleDatePub?: string | null;
  articleEventUri?: string | null;
  articleImage?: string | null;
  articleLanguage?: string | null;
  articleQuality?: number | null;
  articleShare?: number | null;
  articleSimilarity?: number | null;
  articleSourceId?: string | null;
  articleTime?: string | null;
  articleTitle?: string | null;
  articleTone?: number | null;
  articleUri: string;
  articleUrl?: string | null;
  articleWordCount?: number | null;
  id: string;
};

export type DeleteArticleInput = {
  id: string;
  articleUri: string;
};

export type CreateUserInput = {
  id?: string | null;
  userCognitoId: string;
  userIsPremium?: boolean | null;
  userCustomerId?: string | null;
  userFeedbackId?: string | null;
  userUserConfigId?: string | null;
};

export type UpdateUserInput = {
  id: string;
  userCognitoId?: string | null;
  userIsPremium?: boolean | null;
  userCustomerId?: string | null;
  userFeedbackId?: string | null;
  userUserConfigId?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateConfigMemberInput = {
  id?: string | null;
  configMemberArticleId: string;
  configMemberConfigId: string;
};

export type UpdateConfigMemberInput = {
  id: string;
  configMemberArticleId?: string | null;
  configMemberConfigId?: string | null;
};

export type DeleteConfigMemberInput = {
  id?: string | null;
};

export type CreateConfigInput = {
  id?: string | null;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
  configUserId?: string | null;
};

export type UpdateConfigInput = {
  id: string;
  keywordsToInclude?: Array<string | null> | null;
  keywordsToExclude?: Array<string | null> | null;
  qualityUpperRange?: number | null;
  qualityLowerRange?: number | null;
  toneUpperRange?: number | null;
  toneLowerRange?: number | null;
  topicsToInclude?: Array<string | null> | null;
  topicsToExclude?: Array<string | null> | null;
  configUserId?: string | null;
};

export type DeleteConfigInput = {
  id?: string | null;
};

export type CreateCustomerInput = {
  customerEmail: string;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate?: string | null;
  customerFreeTrailEndDate?: string | null;
  customerFullName?: string | null;
  customerIsPremium: boolean;
  customerIsActive?: boolean | null;
  customerLastLogin?: string | null;
  customerPremiumStartDate?: string | null;
  customerPremiumEndDate?: string | null;
  customerPremiumIsExpiring?: boolean | null;
  customerUserCognitoId: string;
  customerUsername?: string | null;
  id?: string | null;
  customerUserId?: string | null;
};

export type UpdateCustomerInput = {
  customerEmail?: string | null;
  customerFreeTrial?: boolean | null;
  customerFreeTrailStartDate?: string | null;
  customerFreeTrailEndDate?: string | null;
  customerFullName?: string | null;
  customerIsPremium?: boolean | null;
  customerIsActive?: boolean | null;
  customerLastLogin?: string | null;
  customerPremiumStartDate?: string | null;
  customerPremiumEndDate?: string | null;
  customerPremiumIsExpiring?: boolean | null;
  customerUserCognitoId?: string | null;
  customerUsername?: string | null;
  id: string;
  customerUserId?: string | null;
};

export type DeleteCustomerInput = {
  id?: string | null;
};

export type CreateBillingAddressInput = {
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  id?: string | null;
  billingAddressCustomerId?: string | null;
};

export type UpdateBillingAddressInput = {
  billingAddressCity?: string | null;
  billingAddressHouseNo?: string | null;
  billingAddressPostalCode?: string | null;
  billingAddressStreet?: string | null;
  id: string;
  billingAddressCustomerId?: string | null;
};

export type DeleteBillingAddressInput = {
  id?: string | null;
};

export type CreateFeedbackInput = {
  id?: string | null;
  userFeedbackDiscovery?: string | null;
  userFeedbackLeaveReason?: string | null;
  userFeedbackPromoterScore?: number | null;
  feedbackUserId?: string | null;
};

export type UpdateFeedbackInput = {
  id: string;
  userFeedbackDiscovery?: string | null;
  userFeedbackLeaveReason?: string | null;
  userFeedbackPromoterScore?: number | null;
  feedbackUserId?: string | null;
};

export type DeleteFeedbackInput = {
  id?: string | null;
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
  articleAuthors?: ModelStringFilterInput | null;
  articleBody?: ModelStringFilterInput | null;
  articleDataType?: ModelStringFilterInput | null;
  articleDate?: ModelStringFilterInput | null;
  articleDateTime?: ModelStringFilterInput | null;
  articleDatePub?: ModelStringFilterInput | null;
  articleEventUri?: ModelStringFilterInput | null;
  articleImage?: ModelStringFilterInput | null;
  articleLanguage?: ModelStringFilterInput | null;
  articleQuality?: ModelIntFilterInput | null;
  articleShare?: ModelIntFilterInput | null;
  articleSimilarity?: ModelFloatFilterInput | null;
  articleSourceId?: ModelIDFilterInput | null;
  articleTime?: ModelStringFilterInput | null;
  articleTitle?: ModelStringFilterInput | null;
  articleTone?: ModelFloatFilterInput | null;
  articleUri?: ModelStringFilterInput | null;
  articleUrl?: ModelStringFilterInput | null;
  articleWordCount?: ModelIntFilterInput | null;
  id?: ModelIDFilterInput | null;
  and?: Array<ModelArticleFilterInput | null> | null;
  or?: Array<ModelArticleFilterInput | null> | null;
  not?: ModelArticleFilterInput | null;
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelTopicFilterInput = {
  id?: ModelIDFilterInput | null;
  topicLabel?: ModelStringFilterInput | null;
  topicUri?: ModelStringFilterInput | null;
  and?: Array<ModelTopicFilterInput | null> | null;
  or?: Array<ModelTopicFilterInput | null> | null;
  not?: ModelTopicFilterInput | null;
};

export type ModelSourceFilterInput = {
  id?: ModelIDFilterInput | null;
  sourceDescription?: ModelStringFilterInput | null;
  sourceLocationId?: ModelIDFilterInput | null;
  sourceTitle?: ModelStringFilterInput | null;
  sourceType?: ModelStringFilterInput | null;
  sourceRanking?: ModelIntFilterInput | null;
  sourceUri?: ModelStringFilterInput | null;
  and?: Array<ModelSourceFilterInput | null> | null;
  or?: Array<ModelSourceFilterInput | null> | null;
  not?: ModelSourceFilterInput | null;
};

export type ModelKeywordFilterInput = {
  id?: ModelIDFilterInput | null;
  keywordLabel?: ModelStringFilterInput | null;
  keywordLocationId?: ModelStringFilterInput | null;
  keywordType?: ModelStringFilterInput | null;
  keywordScore?: ModelIntFilterInput | null;
  keywordSynonyms?: ModelStringFilterInput | null;
  keywordUrl?: ModelStringFilterInput | null;
  and?: Array<ModelKeywordFilterInput | null> | null;
  or?: Array<ModelKeywordFilterInput | null> | null;
  not?: ModelKeywordFilterInput | null;
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
  keywordsToInclude?: ModelStringFilterInput | null;
  keywordsToExclude?: ModelStringFilterInput | null;
  qualityUpperRange?: ModelFloatFilterInput | null;
  qualityLowerRange?: ModelFloatFilterInput | null;
  toneUpperRange?: ModelFloatFilterInput | null;
  toneLowerRange?: ModelFloatFilterInput | null;
  topicsToInclude?: ModelStringFilterInput | null;
  topicsToExclude?: ModelStringFilterInput | null;
  and?: Array<ModelConfigFilterInput | null> | null;
  or?: Array<ModelConfigFilterInput | null> | null;
  not?: ModelConfigFilterInput | null;
};

export type ModelCustomerFilterInput = {
  customerEmail?: ModelStringFilterInput | null;
  customerFreeTrial?: ModelBooleanFilterInput | null;
  customerFreeTrailStartDate?: ModelStringFilterInput | null;
  customerFreeTrailEndDate?: ModelStringFilterInput | null;
  customerFullName?: ModelStringFilterInput | null;
  customerIsPremium?: ModelBooleanFilterInput | null;
  customerIsActive?: ModelBooleanFilterInput | null;
  customerLastLogin?: ModelStringFilterInput | null;
  customerPremiumStartDate?: ModelStringFilterInput | null;
  customerPremiumEndDate?: ModelStringFilterInput | null;
  customerPremiumIsExpiring?: ModelBooleanFilterInput | null;
  customerUserCognitoId?: ModelStringFilterInput | null;
  customerUsername?: ModelStringFilterInput | null;
  id?: ModelIDFilterInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
};

export type ModelBillingAddressFilterInput = {
  billingAddressCity?: ModelStringFilterInput | null;
  billingAddressHouseNo?: ModelStringFilterInput | null;
  billingAddressPostalCode?: ModelStringFilterInput | null;
  billingAddressStreet?: ModelStringFilterInput | null;
  id?: ModelIDFilterInput | null;
  and?: Array<ModelBillingAddressFilterInput | null> | null;
  or?: Array<ModelBillingAddressFilterInput | null> | null;
  not?: ModelBillingAddressFilterInput | null;
};

export type ModelFeedbackFilterInput = {
  id?: ModelIDFilterInput | null;
  userFeedbackDiscovery?: ModelStringFilterInput | null;
  userFeedbackLeaveReason?: ModelStringFilterInput | null;
  userFeedbackPromoterScore?: ModelIntFilterInput | null;
  and?: Array<ModelFeedbackFilterInput | null> | null;
  or?: Array<ModelFeedbackFilterInput | null> | null;
  not?: ModelFeedbackFilterInput | null;
};

export type CreateArticleMutation = {
  __typename: "Article";
  articleAuthors: Array<string | null> | null;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDatePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleQuality: number;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleSourceId: string;
  articleTime: string | null;
  articleTitle: string;
  articleTone: number;
  articleUri: string;
  articleUrl: string;
  articleWordCount: number;
  id: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  keywords: {
    __typename: "ModelKeywordMemberConnection";
    items: Array<{
      __typename: "KeywordMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  topics: {
    __typename: "ModelTopicMemberConnection";
    items: Array<{
      __typename: "TopicMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  source: {
    __typename: "Source";
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    id: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceDescription: string | null;
    sourceLocationId: string;
    sourceTitle: string;
    sourceType: string | null;
    sourceRanking: number | null;
    sourceUri: string;
  };
};

export type UpdateArticleMutation = {
  __typename: "Article";
  articleAuthors: Array<string | null> | null;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDatePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleQuality: number;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleSourceId: string;
  articleTime: string | null;
  articleTitle: string;
  articleTone: number;
  articleUri: string;
  articleUrl: string;
  articleWordCount: number;
  id: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  keywords: {
    __typename: "ModelKeywordMemberConnection";
    items: Array<{
      __typename: "KeywordMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  topics: {
    __typename: "ModelTopicMemberConnection";
    items: Array<{
      __typename: "TopicMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  source: {
    __typename: "Source";
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    id: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceDescription: string | null;
    sourceLocationId: string;
    sourceTitle: string;
    sourceType: string | null;
    sourceRanking: number | null;
    sourceUri: string;
  };
};

export type DeleteArticleMutation = {
  __typename: "Article";
  articleAuthors: Array<string | null> | null;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDatePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleQuality: number;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleSourceId: string;
  articleTime: string | null;
  articleTitle: string;
  articleTone: number;
  articleUri: string;
  articleUrl: string;
  articleWordCount: number;
  id: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  keywords: {
    __typename: "ModelKeywordMemberConnection";
    items: Array<{
      __typename: "KeywordMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  topics: {
    __typename: "ModelTopicMemberConnection";
    items: Array<{
      __typename: "TopicMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  source: {
    __typename: "Source";
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    id: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceDescription: string | null;
    sourceLocationId: string;
    sourceTitle: string;
    sourceType: string | null;
    sourceRanking: number | null;
    sourceUri: string;
  };
};

export type CreateUserMutation = {
  __typename: "User";
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
  feedback: {
    __typename: "Feedback";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    userFeedbackPromoterScore: number | null;
  } | null;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
};

export type UpdateUserMutation = {
  __typename: "User";
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
  feedback: {
    __typename: "Feedback";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    userFeedbackPromoterScore: number | null;
  } | null;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
};

export type DeleteUserMutation = {
  __typename: "User";
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
  feedback: {
    __typename: "Feedback";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    userFeedbackPromoterScore: number | null;
  } | null;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
};

export type CreateConfigMemberMutation = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  };
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  id: string;
};

export type UpdateConfigMemberMutation = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  };
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  id: string;
};

export type DeleteConfigMemberMutation = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  };
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  id: string;
};

export type CreateConfigMutation = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type UpdateConfigMutation = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type DeleteConfigMutation = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerEmail: string;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerFullName: string | null;
  customerIsPremium: boolean;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerUserCognitoId: string;
  customerUsername: string | null;
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerEmail: string;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerFullName: string | null;
  customerIsPremium: boolean;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerUserCognitoId: string;
  customerUsername: string | null;
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type DeleteCustomerMutation = {
  __typename: "Customer";
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerEmail: string;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerFullName: string | null;
  customerIsPremium: boolean;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerUserCognitoId: string;
  customerUsername: string | null;
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type CreateBillingAddressMutation = {
  __typename: "BillingAddress";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
};

export type UpdateBillingAddressMutation = {
  __typename: "BillingAddress";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
};

export type DeleteBillingAddressMutation = {
  __typename: "BillingAddress";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
};

export type CreateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  userFeedbackPromoterScore: number | null;
};

export type UpdateFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  userFeedbackPromoterScore: number | null;
};

export type DeleteFeedbackMutation = {
  __typename: "Feedback";
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  userFeedbackPromoterScore: number | null;
};

export type GetArticleQuery = {
  __typename: "Article";
  articleAuthors: Array<string | null> | null;
  articleBody: string;
  articleDataType: string | null;
  articleDate: string | null;
  articleDateTime: string | null;
  articleDatePub: string;
  articleEventUri: string | null;
  articleImage: string | null;
  articleLanguage: string | null;
  articleQuality: number;
  articleShare: number | null;
  articleSimilarity: number | null;
  articleSourceId: string;
  articleTime: string | null;
  articleTitle: string;
  articleTone: number;
  articleUri: string;
  articleUrl: string;
  articleWordCount: number;
  id: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  keywords: {
    __typename: "ModelKeywordMemberConnection";
    items: Array<{
      __typename: "KeywordMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  topics: {
    __typename: "ModelTopicMemberConnection";
    items: Array<{
      __typename: "TopicMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  source: {
    __typename: "Source";
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    id: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceDescription: string | null;
    sourceLocationId: string;
    sourceTitle: string;
    sourceType: string | null;
    sourceRanking: number | null;
    sourceUri: string;
  };
};

export type ListArticlesQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetTopicQuery = {
  __typename: "Topic";
  id: string;
  topicLabel: string;
  topicUri: string;
  articles: {
    __typename: "ModelTopicMemberConnection";
    items: Array<{
      __typename: "TopicMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListTopicsQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    topicLabel: string;
    topicUri: string;
    articles: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetSourceQuery = {
  __typename: "Source";
  articles: {
    __typename: "ModelArticleConnection";
    items: Array<{
      __typename: "Article";
      articleAuthors: Array<string | null> | null;
      articleBody: string;
      articleDataType: string | null;
      articleDate: string | null;
      articleDateTime: string | null;
      articleDatePub: string;
      articleEventUri: string | null;
      articleImage: string | null;
      articleLanguage: string | null;
      articleQuality: number;
      articleShare: number | null;
      articleSimilarity: number | null;
      articleSourceId: string;
      articleTime: string | null;
      articleTitle: string;
      articleTone: number;
      articleUri: string;
      articleUrl: string;
      articleWordCount: number;
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  id: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    keywords: {
      __typename: "ModelKeywordConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  };
  sourceDescription: string | null;
  sourceLocationId: string;
  sourceTitle: string;
  sourceType: string | null;
  sourceRanking: number | null;
  sourceUri: string;
};

export type ListSourcesQuery = {
  __typename: "ModelSourceConnection";
  items: Array<{
    __typename: "Source";
    articles: {
      __typename: "ModelArticleConnection";
      nextToken: string | null;
    } | null;
    id: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
    };
    sourceDescription: string | null;
    sourceLocationId: string;
    sourceTitle: string;
    sourceType: string | null;
    sourceRanking: number | null;
    sourceUri: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetKeywordQuery = {
  __typename: "Keyword";
  articles: {
    __typename: "ModelKeywordMemberConnection";
    items: Array<{
      __typename: "KeywordMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  id: string;
  keywordLabel: string;
  keywordLocationId: string | null;
  keywordType: string;
  keywordScore: number | null;
  keywordSynonyms: Array<string | null> | null;
  keywordUrl: string;
  location: {
    __typename: "Location";
    id: string;
    locationType: string;
    locationLabel: string;
    locationCountry: string | null;
    locationLat: number | null;
    locationLong: number | null;
    keywords: {
      __typename: "ModelKeywordConnection";
      nextToken: string | null;
    } | null;
    sources: {
      __typename: "ModelSourceConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListKeywordsQuery = {
  __typename: "ModelKeywordConnection";
  items: Array<{
    __typename: "Keyword";
    articles: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    id: string;
    keywordLabel: string;
    keywordLocationId: string | null;
    keywordType: string;
    keywordScore: number | null;
    keywordSynonyms: Array<string | null> | null;
    keywordUrl: string;
    location: {
      __typename: "Location";
      id: string;
      locationType: string;
      locationLabel: string;
      locationCountry: string | null;
      locationLat: number | null;
      locationLong: number | null;
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
  keywords: {
    __typename: "ModelKeywordConnection";
    items: Array<{
      __typename: "Keyword";
      id: string;
      keywordLabel: string;
      keywordLocationId: string | null;
      keywordType: string;
      keywordScore: number | null;
      keywordSynonyms: Array<string | null> | null;
      keywordUrl: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  sources: {
    __typename: "ModelSourceConnection";
    items: Array<{
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
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
    keywords: {
      __typename: "ModelKeywordConnection";
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
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
  feedback: {
    __typename: "Feedback";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    userFeedbackPromoterScore: number | null;
  } | null;
  userCognitoId: string;
  userIsPremium: boolean | null;
  userConfig: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetConfigQuery = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type ListConfigsQuery = {
  __typename: "ModelConfigConnection";
  items: Array<{
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  billingAddresses: {
    __typename: "ModelBillingAddressConnection";
    items: Array<{
      __typename: "BillingAddress";
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  customerEmail: string;
  customerFreeTrial: boolean;
  customerFreeTrailStartDate: string | null;
  customerFreeTrailEndDate: string | null;
  customerFullName: string | null;
  customerIsPremium: boolean;
  customerIsActive: boolean | null;
  customerLastLogin: string | null;
  customerPremiumStartDate: string | null;
  customerPremiumEndDate: string | null;
  customerPremiumIsExpiring: boolean | null;
  customerUserCognitoId: string;
  customerUsername: string | null;
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
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
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  customer: {
    __typename: "Customer";
    billingAddresses: {
      __typename: "ModelBillingAddressConnection";
      nextToken: string | null;
    } | null;
    customerEmail: string;
    customerFreeTrial: boolean;
    customerFreeTrailStartDate: string | null;
    customerFreeTrailEndDate: string | null;
    customerFullName: string | null;
    customerIsPremium: boolean;
    customerIsActive: boolean | null;
    customerLastLogin: string | null;
    customerPremiumStartDate: string | null;
    customerPremiumEndDate: string | null;
    customerPremiumIsExpiring: boolean | null;
    customerUserCognitoId: string;
    customerUsername: string | null;
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
  } | null;
  id: string;
};

export type ListBillingAddresssQuery = {
  __typename: "ModelBillingAddressConnection";
  items: Array<{
    __typename: "BillingAddress";
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFeedbackQuery = {
  __typename: "Feedback";
  id: string;
  user: {
    __typename: "User";
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
  userFeedbackDiscovery: string | null;
  userFeedbackLeaveReason: string | null;
  userFeedbackPromoterScore: number | null;
};

export type ListFeedbacksQuery = {
  __typename: "ModelFeedbackConnection";
  items: Array<{
    __typename: "Feedback";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userCognitoId: string;
      userIsPremium: boolean | null;
    } | null;
    userFeedbackDiscovery: string | null;
    userFeedbackLeaveReason: string | null;
    userFeedbackPromoterScore: number | null;
  } | null> | null;
  nextToken: string | null;
};

export type ArticlesByDateQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateConfigMemberSubscription = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  };
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  id: string;
};

export type OnUpdateConfigMemberSubscription = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  };
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  id: string;
};

export type OnDeleteConfigMemberSubscription = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    articleAuthors: Array<string | null> | null;
    articleBody: string;
    articleDataType: string | null;
    articleDate: string | null;
    articleDateTime: string | null;
    articleDatePub: string;
    articleEventUri: string | null;
    articleImage: string | null;
    articleLanguage: string | null;
    articleQuality: number;
    articleShare: number | null;
    articleSimilarity: number | null;
    articleSourceId: string;
    articleTime: string | null;
    articleTitle: string;
    articleTone: number;
    articleUri: string;
    articleUrl: string;
    articleWordCount: number;
    id: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    keywords: {
      __typename: "ModelKeywordMemberConnection";
      nextToken: string | null;
    } | null;
    topics: {
      __typename: "ModelTopicMemberConnection";
      nextToken: string | null;
    } | null;
    source: {
      __typename: "Source";
      id: string;
      sourceDescription: string | null;
      sourceLocationId: string;
      sourceTitle: string;
      sourceType: string | null;
      sourceRanking: number | null;
      sourceUri: string;
    };
  };
  config: {
    __typename: "Config";
    id: string;
    keywordsToInclude: Array<string | null>;
    keywordsToExclude: Array<string | null>;
    qualityUpperRange: number;
    qualityLowerRange: number;
    toneUpperRange: number;
    toneLowerRange: number;
    topicsToInclude: Array<string | null>;
    topicsToExclude: Array<string | null>;
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
  id: string;
};

export type OnCreateConfigSubscription = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type OnUpdateConfigSubscription = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
    } | null;
  } | null;
};

export type OnDeleteConfigSubscription = {
  __typename: "Config";
  id: string;
  keywordsToInclude: Array<string | null>;
  keywordsToExclude: Array<string | null>;
  qualityUpperRange: number;
  qualityLowerRange: number;
  toneUpperRange: number;
  toneLowerRange: number;
  topicsToInclude: Array<string | null>;
  topicsToExclude: Array<string | null>;
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
    customer: {
      __typename: "Customer";
      customerEmail: string;
      customerFreeTrial: boolean;
      customerFreeTrailStartDate: string | null;
      customerFreeTrailEndDate: string | null;
      customerFullName: string | null;
      customerIsPremium: boolean;
      customerIsActive: boolean | null;
      customerLastLogin: string | null;
      customerPremiumStartDate: string | null;
      customerPremiumEndDate: string | null;
      customerPremiumIsExpiring: boolean | null;
      customerUserCognitoId: string;
      customerUsername: string | null;
      id: string;
    } | null;
    id: string;
    feedback: {
      __typename: "Feedback";
      id: string;
      userFeedbackDiscovery: string | null;
      userFeedbackLeaveReason: string | null;
      userFeedbackPromoterScore: number | null;
    } | null;
    userCognitoId: string;
    userIsPremium: boolean | null;
    userConfig: {
      __typename: "Config";
      id: string;
      keywordsToInclude: Array<string | null>;
      keywordsToExclude: Array<string | null>;
      qualityUpperRange: number;
      qualityLowerRange: number;
      toneUpperRange: number;
      toneLowerRange: number;
      topicsToInclude: Array<string | null>;
      topicsToExclude: Array<string | null>;
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
          articleAuthors
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDatePub
          articleEventUri
          articleImage
          articleLanguage
          articleQuality
          articleShare
          articleSimilarity
          articleSourceId
          articleTime
          articleTitle
          articleTone
          articleUri
          articleUrl
          articleWordCount
          id
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          keywords {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          topics {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          source {
            __typename
            articles {
              __typename
              nextToken
            }
            id
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceDescription
            sourceLocationId
            sourceTitle
            sourceType
            sourceRanking
            sourceUri
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
          articleAuthors
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDatePub
          articleEventUri
          articleImage
          articleLanguage
          articleQuality
          articleShare
          articleSimilarity
          articleSourceId
          articleTime
          articleTitle
          articleTone
          articleUri
          articleUrl
          articleWordCount
          id
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          keywords {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          topics {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          source {
            __typename
            articles {
              __typename
              nextToken
            }
            id
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceDescription
            sourceLocationId
            sourceTitle
            sourceType
            sourceRanking
            sourceUri
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
          articleAuthors
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDatePub
          articleEventUri
          articleImage
          articleLanguage
          articleQuality
          articleShare
          articleSimilarity
          articleSourceId
          articleTime
          articleTitle
          articleTone
          articleUri
          articleUrl
          articleWordCount
          id
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          keywords {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          topics {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          source {
            __typename
            articles {
              __typename
              nextToken
            }
            id
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceDescription
            sourceLocationId
            sourceTitle
            sourceType
            sourceRanking
            sourceUri
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
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
          feedback {
            __typename
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
            userFeedbackDiscovery
            userFeedbackLeaveReason
            userFeedbackPromoterScore
          }
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
          feedback {
            __typename
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
            userFeedbackDiscovery
            userFeedbackLeaveReason
            userFeedbackPromoterScore
          }
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
          feedback {
            __typename
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
            userFeedbackDiscovery
            userFeedbackLeaveReason
            userFeedbackPromoterScore
          }
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateConfigMember(
    input: CreateConfigMemberInput
  ): Promise<CreateConfigMemberMutation> {
    const statement = `mutation CreateConfigMember($input: CreateConfigMemberInput!) {
        createConfigMember(input: $input) {
          __typename
          article {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          id
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
          article {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          id
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
          article {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          id
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          billingAddresses {
            __typename
            items {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              id
            }
            nextToken
          }
          customerEmail
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerFullName
          customerIsPremium
          customerIsActive
          customerLastLogin
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerUserCognitoId
          customerUsername
          id
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          billingAddresses {
            __typename
            items {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              id
            }
            nextToken
          }
          customerEmail
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerFullName
          customerIsPremium
          customerIsActive
          customerLastLogin
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerUserCognitoId
          customerUsername
          id
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          billingAddresses {
            __typename
            items {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              id
            }
            nextToken
          }
          customerEmail
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerFullName
          customerIsPremium
          customerIsActive
          customerLastLogin
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerUserCognitoId
          customerUsername
          id
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
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
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
            }
          }
          userFeedbackDiscovery
          userFeedbackLeaveReason
          userFeedbackPromoterScore
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
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
            }
          }
          userFeedbackDiscovery
          userFeedbackLeaveReason
          userFeedbackPromoterScore
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
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
            }
          }
          userFeedbackDiscovery
          userFeedbackLeaveReason
          userFeedbackPromoterScore
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
  async GetArticle(id: string, articleUri: string): Promise<GetArticleQuery> {
    const statement = `query GetArticle($id: ID!, $articleUri: String!) {
        getArticle(id: $id, articleUri: $articleUri) {
          __typename
          articleAuthors
          articleBody
          articleDataType
          articleDate
          articleDateTime
          articleDatePub
          articleEventUri
          articleImage
          articleLanguage
          articleQuality
          articleShare
          articleSimilarity
          articleSourceId
          articleTime
          articleTitle
          articleTone
          articleUri
          articleUrl
          articleWordCount
          id
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          keywords {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          topics {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          source {
            __typename
            articles {
              __typename
              nextToken
            }
            id
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceDescription
            sourceLocationId
            sourceTitle
            sourceType
            sourceRanking
            sourceUri
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      articleUri
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetArticleQuery>response.data.getArticle;
  }
  async ListArticles(
    id?: string,
    articleUri?: ModelStringKeyConditionInput,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListArticlesQuery> {
    const statement = `query ListArticles($id: ID, $articleUri: ModelStringKeyConditionInput, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listArticles(id: $id, articleUri: $articleUri, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (articleUri) {
      gqlAPIServiceArguments.articleUri = articleUri;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArticlesQuery>response.data.listArticles;
  }
  async GetTopic(id: string): Promise<GetTopicQuery> {
    const statement = `query GetTopic($id: ID!) {
        getTopic(id: $id) {
          __typename
          id
          topicLabel
          topicUri
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
    return <GetTopicQuery>response.data.getTopic;
  }
  async ListTopics(
    filter?: ModelTopicFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTopicsQuery> {
    const statement = `query ListTopics($filter: ModelTopicFilterInput, $limit: Int, $nextToken: String) {
        listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            topicLabel
            topicUri
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
    return <ListTopicsQuery>response.data.listTopics;
  }
  async GetSource(id: string): Promise<GetSourceQuery> {
    const statement = `query GetSource($id: ID!) {
        getSource(id: $id) {
          __typename
          articles {
            __typename
            items {
              __typename
              articleAuthors
              articleBody
              articleDataType
              articleDate
              articleDateTime
              articleDatePub
              articleEventUri
              articleImage
              articleLanguage
              articleQuality
              articleShare
              articleSimilarity
              articleSourceId
              articleTime
              articleTitle
              articleTone
              articleUri
              articleUrl
              articleWordCount
              id
            }
            nextToken
          }
          id
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            keywords {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
            }
          }
          sourceDescription
          sourceLocationId
          sourceTitle
          sourceType
          sourceRanking
          sourceUri
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
            articles {
              __typename
              nextToken
            }
            id
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
            }
            sourceDescription
            sourceLocationId
            sourceTitle
            sourceType
            sourceRanking
            sourceUri
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
  async GetKeyword(id: string): Promise<GetKeywordQuery> {
    const statement = `query GetKeyword($id: ID!) {
        getKeyword(id: $id) {
          __typename
          articles {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          id
          keywordLabel
          keywordLocationId
          keywordType
          keywordScore
          keywordSynonyms
          keywordUrl
          location {
            __typename
            id
            locationType
            locationLabel
            locationCountry
            locationLat
            locationLong
            keywords {
              __typename
              nextToken
            }
            sources {
              __typename
              nextToken
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
    return <GetKeywordQuery>response.data.getKeyword;
  }
  async ListKeywords(
    filter?: ModelKeywordFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListKeywordsQuery> {
    const statement = `query ListKeywords($filter: ModelKeywordFilterInput, $limit: Int, $nextToken: String) {
        listKeywords(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            articles {
              __typename
              nextToken
            }
            id
            keywordLabel
            keywordLocationId
            keywordType
            keywordScore
            keywordSynonyms
            keywordUrl
            location {
              __typename
              id
              locationType
              locationLabel
              locationCountry
              locationLat
              locationLong
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
    return <ListKeywordsQuery>response.data.listKeywords;
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
          keywords {
            __typename
            items {
              __typename
              id
              keywordLabel
              keywordLocationId
              keywordType
              keywordScore
              keywordSynonyms
              keywordUrl
            }
            nextToken
          }
          sources {
            __typename
            items {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
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
            keywords {
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
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
          feedback {
            __typename
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
            userFeedbackDiscovery
            userFeedbackLeaveReason
            userFeedbackPromoterScore
          }
          userCognitoId
          userIsPremium
          userConfig {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          billingAddresses {
            __typename
            items {
              __typename
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              id
            }
            nextToken
          }
          customerEmail
          customerFreeTrial
          customerFreeTrailStartDate
          customerFreeTrailEndDate
          customerFullName
          customerIsPremium
          customerIsActive
          customerLastLogin
          customerPremiumStartDate
          customerPremiumEndDate
          customerPremiumIsExpiring
          customerUserCognitoId
          customerUsername
          id
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          customer {
            __typename
            billingAddresses {
              __typename
              nextToken
            }
            customerEmail
            customerFreeTrial
            customerFreeTrailStartDate
            customerFreeTrailEndDate
            customerFullName
            customerIsPremium
            customerIsActive
            customerLastLogin
            customerPremiumStartDate
            customerPremiumEndDate
            customerPremiumIsExpiring
            customerUserCognitoId
            customerUsername
            id
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
          }
          id
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
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
          user {
            __typename
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
            }
          }
          userFeedbackDiscovery
          userFeedbackLeaveReason
          userFeedbackPromoterScore
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
            user {
              __typename
              id
              userCognitoId
              userIsPremium
            }
            userFeedbackDiscovery
            userFeedbackLeaveReason
            userFeedbackPromoterScore
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
  async ArticlesByDate(
    articleDataType?: string,
    articleDatePub?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ArticlesByDateQuery> {
    const statement = `query ArticlesByDate($articleDataType: String, $articleDatePub: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String) {
        articlesByDate(articleDataType: $articleDataType, articleDatePub: $articleDatePub, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
              items {
                keyword {
                  id
                  keywordLabel
                  keywordLocationId
                  keywordType
                  keywordScore
                  keywordSynonyms
                  keywordUrl
                  location {
                    id
                    locationType
                    locationLabel
                    locationCountry
                    locationLat
                    locationLong
                    keywords {
                      nextToken
                    }
                    sources {
                      nextToken
                    }
                  }
                }
              }
            }
            topics {
              __typename
              nextToken
              items {
                topic {
                  id
                  topicLabel
                  topicUri
                }
              }
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
              location {
                id
                locationType
                locationLabel
                locationCountry
                locationLat
                locationLong
                keywords {
                  nextToken
                }
                sources {
                  nextToken
                }
              }
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (articleDataType) {
      gqlAPIServiceArguments.articleDataType = articleDataType;
    }
    if (articleDatePub) {
      gqlAPIServiceArguments.articleDatePub = articleDatePub;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <ArticlesByDateQuery>response.data.articlesByDate;
  }
  OnCreateConfigMemberListener: Observable<
    OnCreateConfigMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConfigMember {
        onCreateConfigMember {
          __typename
          article {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          id
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
          article {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          id
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
          article {
            __typename
            articleAuthors
            articleBody
            articleDataType
            articleDate
            articleDateTime
            articleDatePub
            articleEventUri
            articleImage
            articleLanguage
            articleQuality
            articleShare
            articleSimilarity
            articleSourceId
            articleTime
            articleTitle
            articleTone
            articleUri
            articleUrl
            articleWordCount
            id
            configs {
              __typename
              nextToken
            }
            keywords {
              __typename
              nextToken
            }
            topics {
              __typename
              nextToken
            }
            source {
              __typename
              id
              sourceDescription
              sourceLocationId
              sourceTitle
              sourceType
              sourceRanking
              sourceUri
            }
          }
          config {
            __typename
            id
            keywordsToInclude
            keywordsToExclude
            qualityUpperRange
            qualityLowerRange
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
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
          id
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
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
          keywordsToInclude
          keywordsToExclude
          qualityUpperRange
          qualityLowerRange
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
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
            customer {
              __typename
              customerEmail
              customerFreeTrial
              customerFreeTrailStartDate
              customerFreeTrailEndDate
              customerFullName
              customerIsPremium
              customerIsActive
              customerLastLogin
              customerPremiumStartDate
              customerPremiumEndDate
              customerPremiumIsExpiring
              customerUserCognitoId
              customerUsername
              id
            }
            id
            feedback {
              __typename
              id
              userFeedbackDiscovery
              userFeedbackLeaveReason
              userFeedbackPromoterScore
            }
            userCognitoId
            userIsPremium
            userConfig {
              __typename
              id
              keywordsToInclude
              keywordsToExclude
              qualityUpperRange
              qualityLowerRange
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteConfigSubscription>;
}
