/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCustomerInput = {
  id?: string | null;
  customerEmail: string;
  customerSurveyId?: string | null;
};

export type UpdateCustomerInput = {
  id: string;
  customerEmail?: string | null;
  customerSurveyId?: string | null;
};

export type CreateSurveyInput = {
  id?: string | null;
  surveyTryReason: string;
  surveyLeaveComments: boolean;
  surveyLocalityOption: string;
  surveyBiasOption: string;
  surveyUsedServices?: Array<string> | null;
  surveyCustomerId: string;
};

export type CreateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerEmail: string;
  survey: {
    __typename: "Survey";
    id: string;
    surveyTryReason: string;
    surveyLeaveComments: boolean;
    surveyLocalityOption: string;
    surveyBiasOption: string;
    surveyUsedServices: Array<string> | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerEmail: string;
    };
  } | null;
};

export type UpdateCustomerMutation = {
  __typename: "Customer";
  id: string;
  customerEmail: string;
  survey: {
    __typename: "Survey";
    id: string;
    surveyTryReason: string;
    surveyLeaveComments: boolean;
    surveyLocalityOption: string;
    surveyBiasOption: string;
    surveyUsedServices: Array<string> | null;
    customer: {
      __typename: "Customer";
      id: string;
      customerEmail: string;
    };
  } | null;
};

export type CreateSurveyMutation = {
  __typename: "Survey";
  id: string;
  surveyTryReason: string;
  surveyLeaveComments: boolean;
  surveyLocalityOption: string;
  surveyBiasOption: string;
  surveyUsedServices: Array<string> | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerEmail: string;
    survey: {
      __typename: "Survey";
      id: string;
      surveyTryReason: string;
      surveyLeaveComments: boolean;
      surveyLocalityOption: string;
      surveyBiasOption: string;
      surveyUsedServices: Array<string> | null;
    } | null;
  };
};

export type UpdateSurveyMutation = {
  __typename: "Survey";
  id: string;
  surveyTryReason: string;
  surveyLeaveComments: boolean;
  surveyLocalityOption: string;
  surveyBiasOption: string;
  surveyUsedServices: Array<string> | null;
  customer: {
    __typename: "Customer";
    id: string;
    customerEmail: string;
    survey: {
      __typename: "Survey";
      id: string;
      surveyTryReason: string;
      surveyLeaveComments: boolean;
      surveyLocalityOption: string;
      surveyBiasOption: string;
      surveyUsedServices: Array<string> | null;
    } | null;
  };
};


@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCustomer(
    input: CreateCustomerInput
  ): Promise<CreateCustomerMutation> {
    const statement = `mutation CreateCustomer($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
          __typename
          id
          customerEmail
          survey {
            __typename
            id
            surveyTryReason
            surveyLeaveComments
            surveyLocalityOption
            surveyBiasOption
            surveyUsedServices
            customer {
              __typename
              id
              customerEmail
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
          customerEmail
          survey {
            __typename
            id
            surveyTryReason
            surveyLeaveComments
            surveyLocalityOption
            surveyBiasOption
            surveyUsedServices
            customer {
              __typename
              id
              customerEmail
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
  
  async CreateSurvey(input: CreateSurveyInput): Promise<CreateSurveyMutation> {
    const statement = `mutation CreateSurvey($input: CreateSurveyInput!) {
        createSurvey(input: $input) {
          __typename
          id
          surveyTryReason
          surveyLeaveComments
          surveyLocalityOption
          surveyBiasOption
          surveyUsedServices
          customer {
            __typename
            id
            customerEmail
            survey {
              __typename
              id
              surveyTryReason
              surveyLeaveComments
              surveyLocalityOption
              surveyBiasOption
              surveyUsedServices
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
    return <CreateSurveyMutation>response.data.createSurvey;
  }
}
