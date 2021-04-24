/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

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
  __typename: "User";
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
  __typename: "Config";
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
  __typename: "ModelUserConnection";
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
  __typename: "ModelConfigConnection";
  items?: Array<Config | null> | null;
  nextToken?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type Article = {
  __typename: "Article";
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
  __typename: "ModelArticleConnection";
  items?: Array<Article | null> | null;
  nextToken?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  config?: {
    __typename: "Config";
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
      __typename: "User";
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
  __typename: "User";
  config?: {
    __typename: "Config";
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
  __typename: "User";
  config?: {
    __typename: "Config";
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
  __typename: "Config";
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
    __typename: "User";
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
  __typename: "Config";
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
    __typename: "User";
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
  __typename: "Config";
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
    __typename: "User";
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
  __typename: "User";
  config?: {
    __typename: "Config";
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
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    config?: {
      __typename: "Config";
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
  __typename: "Config";
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
    __typename: "User";
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
  __typename: "ModelConfigConnection";
  items?: Array<{
    __typename: "Config";
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
      __typename: "User";
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
  __typename: "ModelUserConnection";
  items?: Array<{
    __typename: "User";
    config?: {
      __typename: "Config";
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
  __typename: "ModelConfigConnection";
  items?: Array<{
    __typename: "Config";
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
      __typename: "User";
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
  __typename: "Article";
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
  __typename: "ModelArticleConnection";
  items?: Array<{
    __typename: "Article";
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
  __typename: "ModelArticleConnection";
  items?: Array<{
    __typename: "Article";
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
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          config {
            __typename
            createdAt
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            biasToInclude
            biasToExclude
            updatedAt
          }
          createdAt
          email
          id
          lastLogin
          ownerId
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
          updatedAt
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
          config {
            __typename
            createdAt
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            biasToInclude
            biasToExclude
            updatedAt
          }
          createdAt
          email
          id
          lastLogin
          ownerId
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
          updatedAt
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
          config {
            __typename
            createdAt
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            biasToInclude
            biasToExclude
            updatedAt
          }
          createdAt
          email
          id
          lastLogin
          ownerId
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
          updatedAt
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
  async CreateConfig(input: CreateConfigInput): Promise<CreateConfigMutation> {
    const statement = `mutation CreateConfig($input: CreateConfigInput!) {
        createConfig(input: $input) {
          __typename
          createdAt
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          biasToInclude
          biasToExclude
          updatedAt
          user {
            __typename
            createdAt
            email
            id
            lastLogin
            ownerId
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
            updatedAt
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
          createdAt
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          biasToInclude
          biasToExclude
          updatedAt
          user {
            __typename
            createdAt
            email
            id
            lastLogin
            ownerId
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
            updatedAt
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
          createdAt
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          biasToInclude
          biasToExclude
          updatedAt
          user {
            __typename
            createdAt
            email
            id
            lastLogin
            ownerId
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
            updatedAt
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
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          config {
            __typename
            createdAt
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            biasToInclude
            biasToExclude
            updatedAt
          }
          createdAt
          email
          id
          lastLogin
          ownerId
          feedbackDiscovery
          feedbackLeaveReason
          feedbackPromoterScore
          updatedAt
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
            config {
              __typename
              createdAt
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
              biasToInclude
              biasToExclude
              updatedAt
            }
            createdAt
            email
            id
            lastLogin
            ownerId
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
            updatedAt
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
          createdAt
          id
          keywordsToInclude
          keywordsToExclude
          ownerId
          toneUpperRange
          toneLowerRange
          topicsToInclude
          topicsToExclude
          savedArticleIds
          sourcesToInclude
          sourcesToExclude
          locationsToInclude
          locationsToExclude
          biasToInclude
          biasToExclude
          updatedAt
          user {
            __typename
            createdAt
            email
            id
            lastLogin
            ownerId
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
            updatedAt
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
            createdAt
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            biasToInclude
            biasToExclude
            updatedAt
            user {
              __typename
              createdAt
              email
              id
              lastLogin
              ownerId
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
              updatedAt
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
  async UserByOwner(
    ownerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserByOwnerQuery> {
    const statement = `query UserByOwner($ownerId: String, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        userByOwner(ownerId: $ownerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            config {
              __typename
              createdAt
              id
              keywordsToInclude
              keywordsToExclude
              ownerId
              toneUpperRange
              toneLowerRange
              topicsToInclude
              topicsToExclude
              savedArticleIds
              sourcesToInclude
              sourcesToExclude
              locationsToInclude
              locationsToExclude
              biasToInclude
              biasToExclude
              updatedAt
            }
            createdAt
            email
            id
            lastLogin
            ownerId
            feedbackDiscovery
            feedbackLeaveReason
            feedbackPromoterScore
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ownerId) {
      gqlAPIServiceArguments.ownerId = ownerId;
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
    return <UserByOwnerQuery>response.data.userByOwner;
  }
  async ConfigByOwner(
    ownerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelConfigFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ConfigByOwnerQuery> {
    const statement = `query ConfigByOwner($ownerId: String, $sortDirection: ModelSortDirection, $filter: ModelConfigFilterInput, $limit: Int, $nextToken: String) {
        configByOwner(ownerId: $ownerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            createdAt
            id
            keywordsToInclude
            keywordsToExclude
            ownerId
            toneUpperRange
            toneLowerRange
            topicsToInclude
            topicsToExclude
            savedArticleIds
            sourcesToInclude
            sourcesToExclude
            locationsToInclude
            locationsToExclude
            biasToInclude
            biasToExclude
            updatedAt
            user {
              __typename
              createdAt
              email
              id
              lastLogin
              ownerId
              feedbackDiscovery
              feedbackLeaveReason
              feedbackPromoterScore
              updatedAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ownerId) {
      gqlAPIServiceArguments.ownerId = ownerId;
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
    return <ConfigByOwnerQuery>response.data.configByOwner;
  }
  async GetArticle(id: string, uri: string): Promise<GetArticleQuery> {
    const statement = `query GetArticle($id: ID!, $uri: String!) {
        getArticle(id: $id, uri: $uri) {
          __typename
          authors
          biasRating
          body
          createdAt
          dataType
          date
          datePublished
          displayBiasRating
          displayAuthors
          displayDateTime
          displayKeywords
          displaySourceCountry
          displaySourceTitle
          displayTopics
          eventUri
          id
          image
          keywords
          language
          share
          similarity
          searchTerms
          sourceCountry
          sourceRanking
          sourceTitle
          title
          time
          tone
          topics
          timeToLive
          updatedAt
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
            biasRating
            body
            createdAt
            dataType
            date
            datePublished
            displayBiasRating
            displayAuthors
            displayDateTime
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            share
            similarity
            searchTerms
            sourceCountry
            sourceRanking
            sourceTitle
            title
            time
            tone
            topics
            timeToLive
            updatedAt
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
  async ArticlesByDate(
    dataType?: string,
    displayDateTime?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelArticleFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ArticlesByDateQuery> {
    const statement = `query ArticlesByDate($dataType: String, $displayDateTime: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelArticleFilterInput, $limit: Int, $nextToken: String) {
        articlesByDate(dataType: $dataType, displayDateTime: $displayDateTime, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            authors
            biasRating
            body
            createdAt
            dataType
            date
            datePublished
            displayBiasRating
            displayAuthors
            displayDateTime
            displayKeywords
            displaySourceCountry
            displaySourceTitle
            displayTopics
            eventUri
            id
            image
            keywords
            language
            share
            similarity
            searchTerms
            sourceCountry
            sourceRanking
            sourceTitle
            title
            time
            tone
            topics
            timeToLive
            updatedAt
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
    if (displayDateTime) {
      gqlAPIServiceArguments.displayDateTime = displayDateTime;
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
    const response = (await API.graphql({
      query: statement,
      variables: gqlAPIServiceArguments,
      authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
    })) as any;
    return <ArticlesByDateQuery>response.data.articlesByDate;
  }
}
