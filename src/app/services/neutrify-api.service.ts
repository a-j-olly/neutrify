/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateArticleInput = {
  authors?: Array<string> | null;
  body: string;
  dataType: string;
  date?: string | null;
  dateTime?: string | null;
  datePublished: string;
  displayAuthors?: Array<string> | null;
  displayKeywords?: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics?: Array<string> | null;
  eventUri?: string | null;
  id: string;
  image?: string | null;
  keywords?: Array<string> | null;
  language?: string | null;
  quality: number;
  share?: number | null;
  similarity?: number | null;
  time?: string | null;
  sourceCountry: string;
  sourceRanking?: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics?: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type UpdateArticleInput = {
  authors?: Array<string> | null;
  body?: string | null;
  dataType?: string | null;
  date?: string | null;
  dateTime?: string | null;
  datePublished?: string | null;
  displayAuthors?: Array<string> | null;
  displayKeywords?: Array<string> | null;
  displaySourceCountry?: string | null;
  displaySourceTitle?: string | null;
  displayTopics?: Array<string> | null;
  eventUri?: string | null;
  id: string;
  image?: string | null;
  keywords?: Array<string> | null;
  language?: string | null;
  quality?: number | null;
  share?: number | null;
  similarity?: number | null;
  time?: string | null;
  sourceCountry?: string | null;
  sourceRanking?: number | null;
  sourceTitle?: string | null;
  title?: string | null;
  tone?: number | null;
  topics?: Array<string> | null;
  uri: string;
  url?: string | null;
  wordCount?: number | null;
};

export type DeleteArticleInput = {
  id: string;
  uri: string;
};

export type CreateUserInput = {
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  cognitoId: string;
  email: string;
  freeTrial: boolean;
  freeTrailStartDate?: string | null;
  freeTrailEndDate?: string | null;
  fullName?: string | null;
  id?: string | null;
  isPremium: boolean;
  isActive?: boolean | null;
  lastLogin?: string | null;
  premiumEndDate?: string | null;
  premiumIsExpiring?: boolean | null;
  premiumStartDate?: string | null;
  username?: string | null;
  feedbackDiscovery?: string | null;
  feedbackLeaveReason?: string | null;
  feedbackPromoterScore?: number | null;
  userConfigId?: string | null;
};

export type UpdateUserInput = {
  billingAddressCity?: string | null;
  billingAddressHouseNo?: string | null;
  billingAddressPostalCode?: string | null;
  billingAddressStreet?: string | null;
  cognitoId?: string | null;
  email?: string | null;
  freeTrial?: boolean | null;
  freeTrailStartDate?: string | null;
  freeTrailEndDate?: string | null;
  fullName?: string | null;
  id: string;
  isPremium?: boolean | null;
  isActive?: boolean | null;
  lastLogin?: string | null;
  premiumEndDate?: string | null;
  premiumIsExpiring?: boolean | null;
  premiumStartDate?: string | null;
  username?: string | null;
  feedbackDiscovery?: string | null;
  feedbackLeaveReason?: string | null;
  feedbackPromoterScore?: number | null;
  userConfigId?: string | null;
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
  body?: ModelStringFilterInput | null;
  dataType?: ModelStringFilterInput | null;
  date?: ModelStringFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  datePublished?: ModelStringFilterInput | null;
  displayAuthors?: ModelStringFilterInput | null;
  displayKeywords?: ModelStringFilterInput | null;
  displaySourceCountry?: ModelStringFilterInput | null;
  displaySourceTitle?: ModelStringFilterInput | null;
  displayTopics?: ModelStringFilterInput | null;
  eventUri?: ModelStringFilterInput | null;
  id?: ModelIDFilterInput | null;
  image?: ModelStringFilterInput | null;
  keywords?: ModelStringFilterInput | null;
  language?: ModelStringFilterInput | null;
  quality?: ModelIntFilterInput | null;
  share?: ModelIntFilterInput | null;
  similarity?: ModelFloatFilterInput | null;
  time?: ModelStringFilterInput | null;
  sourceCountry?: ModelStringFilterInput | null;
  sourceRanking?: ModelIntFilterInput | null;
  sourceTitle?: ModelStringFilterInput | null;
  title?: ModelStringFilterInput | null;
  tone?: ModelFloatFilterInput | null;
  topics?: ModelStringFilterInput | null;
  uri?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  wordCount?: ModelIntFilterInput | null;
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelUserFilterInput = {
  billingAddressCity?: ModelStringFilterInput | null;
  billingAddressHouseNo?: ModelStringFilterInput | null;
  billingAddressPostalCode?: ModelStringFilterInput | null;
  billingAddressStreet?: ModelStringFilterInput | null;
  cognitoId?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  freeTrial?: ModelBooleanFilterInput | null;
  freeTrailStartDate?: ModelStringFilterInput | null;
  freeTrailEndDate?: ModelStringFilterInput | null;
  fullName?: ModelStringFilterInput | null;
  id?: ModelIDFilterInput | null;
  isPremium?: ModelBooleanFilterInput | null;
  isActive?: ModelBooleanFilterInput | null;
  lastLogin?: ModelStringFilterInput | null;
  premiumEndDate?: ModelStringFilterInput | null;
  premiumIsExpiring?: ModelBooleanFilterInput | null;
  premiumStartDate?: ModelStringFilterInput | null;
  username?: ModelStringFilterInput | null;
  feedbackDiscovery?: ModelStringFilterInput | null;
  feedbackLeaveReason?: ModelStringFilterInput | null;
  feedbackPromoterScore?: ModelIntFilterInput | null;
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

export type CreateArticleMutation = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type UpdateArticleMutation = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type DeleteArticleMutation = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type CreateUserMutation = {
  __typename: "User";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  cognitoId: string;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrailStartDate: string | null;
  freeTrailEndDate: string | null;
  fullName: string | null;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  username: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  cognitoId: string;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrailStartDate: string | null;
  freeTrailEndDate: string | null;
  fullName: string | null;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  username: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  cognitoId: string;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrailStartDate: string | null;
  freeTrailEndDate: string | null;
  fullName: string | null;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  username: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type CreateConfigMemberMutation = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  };
  id: string;
};

export type UpdateConfigMemberMutation = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  };
  id: string;
};

export type DeleteConfigMemberMutation = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
  } | null;
};

export type GetArticleQuery = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type ListArticlesQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  billingAddressCity: string;
  billingAddressHouseNo: string;
  billingAddressPostalCode: string;
  billingAddressStreet: string;
  cognitoId: string;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null;
  email: string;
  freeTrial: boolean;
  freeTrailStartDate: string | null;
  freeTrailEndDate: string | null;
  fullName: string | null;
  id: string;
  isPremium: boolean;
  isActive: boolean | null;
  lastLogin: string | null;
  premiumEndDate: string | null;
  premiumIsExpiring: boolean | null;
  premiumStartDate: string | null;
  username: string | null;
  feedbackDiscovery: string | null;
  feedbackLeaveReason: string | null;
  feedbackPromoterScore: number | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type ArticlesByDateQuery = {
  __typename: "ModelArticleConnection";
  items: Array<{
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateArticleSubscription = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type OnUpdateArticleSubscription = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type OnDeleteArticleSubscription = {
  __typename: "Article";
  authors: Array<string> | null;
  body: string;
  configs: {
    __typename: "ModelConfigMemberConnection";
    items: Array<{
      __typename: "ConfigMember";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  dataType: string;
  date: string | null;
  dateTime: string | null;
  datePublished: string;
  displayAuthors: Array<string> | null;
  displayKeywords: Array<string> | null;
  displaySourceCountry: string;
  displaySourceTitle: string;
  displayTopics: Array<string> | null;
  eventUri: string | null;
  id: string;
  image: string | null;
  keywords: Array<string> | null;
  language: string | null;
  quality: number;
  share: number | null;
  similarity: number | null;
  time: string | null;
  sourceCountry: string;
  sourceRanking: number | null;
  sourceTitle: string;
  title: string;
  tone: number;
  topics: Array<string> | null;
  uri: string;
  url: string;
  wordCount: number;
};

export type OnCreateConfigMemberSubscription = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  };
  id: string;
};

export type OnUpdateConfigMemberSubscription = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
    } | null;
  };
  id: string;
};

export type OnDeleteConfigMemberSubscription = {
  __typename: "ConfigMember";
  article: {
    __typename: "Article";
    authors: Array<string> | null;
    body: string;
    configs: {
      __typename: "ModelConfigMemberConnection";
      nextToken: string | null;
    } | null;
    dataType: string;
    date: string | null;
    dateTime: string | null;
    datePublished: string;
    displayAuthors: Array<string> | null;
    displayKeywords: Array<string> | null;
    displaySourceCountry: string;
    displaySourceTitle: string;
    displayTopics: Array<string> | null;
    eventUri: string | null;
    id: string;
    image: string | null;
    keywords: Array<string> | null;
    language: string | null;
    quality: number;
    share: number | null;
    similarity: number | null;
    time: string | null;
    sourceCountry: string;
    sourceRanking: number | null;
    sourceTitle: string;
    title: string;
    tone: number;
    topics: Array<string> | null;
    uri: string;
    url: string;
    wordCount: number;
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
      billingAddressCity: string;
      billingAddressHouseNo: string;
      billingAddressPostalCode: string;
      billingAddressStreet: string;
      cognitoId: string;
      email: string;
      freeTrial: boolean;
      freeTrailStartDate: string | null;
      freeTrailEndDate: string | null;
      fullName: string | null;
      id: string;
      isPremium: boolean;
      isActive: boolean | null;
      lastLogin: string | null;
      premiumEndDate: string | null;
      premiumIsExpiring: boolean | null;
      premiumStartDate: string | null;
      username: string | null;
      feedbackDiscovery: string | null;
      feedbackLeaveReason: string | null;
      feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
    billingAddressCity: string;
    billingAddressHouseNo: string;
    billingAddressPostalCode: string;
    billingAddressStreet: string;
    cognitoId: string;
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
    } | null;
    email: string;
    freeTrial: boolean;
    freeTrailStartDate: string | null;
    freeTrailEndDate: string | null;
    fullName: string | null;
    id: string;
    isPremium: boolean;
    isActive: boolean | null;
    lastLogin: string | null;
    premiumEndDate: string | null;
    premiumIsExpiring: boolean | null;
    premiumStartDate: string | null;
    username: string | null;
    feedbackDiscovery: string | null;
    feedbackLeaveReason: string | null;
    feedbackPromoterScore: number | null;
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
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
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
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
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
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          cognitoId
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrailStartDate
          freeTrailEndDate
          fullName
          id
          isPremium
          isActive
          lastLogin
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          username
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          cognitoId
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrailStartDate
          freeTrailEndDate
          fullName
          id
          isPremium
          isActive
          lastLogin
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          username
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
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
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          cognitoId
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrailStartDate
          freeTrailEndDate
          fullName
          id
          isPremium
          isActive
          lastLogin
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          username
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
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
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
  async GetArticle(id: string, uri: string): Promise<GetArticleQuery> {
    const statement = `query GetArticle($id: ID!, $uri: String!) {
        getArticle(id: $id, uri: $uri) {
          __typename
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      uri
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetArticleQuery>response.data.getArticle;
  }
  async ListArticles(
    id?: string,
    uri?: ModelStringKeyConditionInput,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListArticlesQuery> {
    const statement = `query ListArticles($id: ID, $uri: ModelStringKeyConditionInput, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listArticles(id: $id, uri: $uri, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (uri) {
      gqlAPIServiceArguments.uri = uri;
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
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          billingAddressCity
          billingAddressHouseNo
          billingAddressPostalCode
          billingAddressStreet
          cognitoId
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
            }
          }
          email
          freeTrial
          freeTrailStartDate
          freeTrailEndDate
          fullName
          id
          isPremium
          isActive
          lastLogin
          premiumEndDate
          premiumIsExpiring
          premiumStartDate
          username
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
  async ArticlesByDate(
    dataType?: string,
    datePublished?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ArticlesByDateQuery> {
    const statement = `query ArticlesByDate($dataType: String, $datePublished: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String) {
        articlesByDate(dataType: $dataType, datePublished: $datePublished, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (dataType) {
      gqlAPIServiceArguments.dataType = dataType;
    }
    if (datePublished) {
      gqlAPIServiceArguments.datePublished = datePublished;
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
  OnCreateArticleListener: Observable<
    OnCreateArticleSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateArticle {
        onCreateArticle {
          __typename
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
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
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
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
          authors
          body
          configs {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          dataType
          date
          dateTime
          datePublished
          displayAuthors
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          quality
          share
          similarity
          time
          sourceCountry
          sourceRanking
          sourceTitle
          title
          tone
          topics
          uri
          url
          wordCount
        }
      }`
    )
  ) as Observable<OnDeleteArticleSubscription>;

  OnCreateConfigMemberListener: Observable<
    OnCreateConfigMemberSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConfigMember {
        onCreateConfigMember {
          __typename
          article {
            __typename
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
            authors
            body
            configs {
              __typename
              nextToken
            }
            dataType
            date
            dateTime
            datePublished
            displayAuthors
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            quality
            share
            similarity
            time
            sourceCountry
            sourceRanking
            sourceTitle
            title
            tone
            topics
            uri
            url
            wordCount
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
              billingAddressCity
              billingAddressHouseNo
              billingAddressPostalCode
              billingAddressStreet
              cognitoId
              email
              freeTrial
              freeTrailStartDate
              freeTrailEndDate
              fullName
              id
              isPremium
              isActive
              lastLogin
              premiumEndDate
              premiumIsExpiring
              premiumStartDate
              username
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
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
            billingAddressCity
            billingAddressHouseNo
            billingAddressPostalCode
            billingAddressStreet
            cognitoId
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
            }
            email
            freeTrial
            freeTrailStartDate
            freeTrailEndDate
            fullName
            id
            isPremium
            isActive
            lastLogin
            premiumEndDate
            premiumIsExpiring
            premiumStartDate
            username
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
          }
        }
      }`
    )
  ) as Observable<OnDeleteConfigSubscription>;
}
