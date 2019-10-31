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

export type DeleteCustomerInput = {
  id?: string | null;
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

export type UpdateSurveyInput = {
  id: string;
  surveyTryReason?: string | null;
  surveyLeaveComments?: boolean | null;
  surveyLocalityOption?: string | null;
  surveyBiasOption?: string | null;
  surveyUsedServices?: Array<string> | null;
  surveyCustomerId?: string | null;
};

export type DeleteSurveyInput = {
  id?: string | null;
};

export type ModelCustomerFilterInput = {
  id?: ModelIDFilterInput | null;
  customerEmail?: ModelStringFilterInput | null;
  and?: Array<ModelCustomerFilterInput | null> | null;
  or?: Array<ModelCustomerFilterInput | null> | null;
  not?: ModelCustomerFilterInput | null;
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

export type ModelSurveyFilterInput = {
  id?: ModelIDFilterInput | null;
  surveyTryReason?: ModelStringFilterInput | null;
  surveyLeaveComments?: ModelBooleanFilterInput | null;
  surveyLocalityOption?: ModelStringFilterInput | null;
  surveyBiasOption?: ModelStringFilterInput | null;
  surveyUsedServices?: ModelStringFilterInput | null;
  and?: Array<ModelSurveyFilterInput | null> | null;
  or?: Array<ModelSurveyFilterInput | null> | null;
  not?: ModelSurveyFilterInput | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
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

export type DeleteCustomerMutation = {
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

export type DeleteSurveyMutation = {
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

export type GetCustomerQuery = {
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

export type ListCustomersQuery = {
  __typename: "ModelCustomerConnection";
  items: Array<{
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
  } | null> | null;
  nextToken: string | null;
};

export type GetSurveyQuery = {
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

export type ListSurveysQuery = {
  __typename: "ModelSurveyConnection";
  items: Array<{
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
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCustomerSubscription = {
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

export type OnUpdateCustomerSubscription = {
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

export type OnDeleteCustomerSubscription = {
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

export type OnCreateSurveySubscription = {
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

export type OnUpdateSurveySubscription = {
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

export type OnDeleteSurveySubscription = {
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
  async DeleteCustomer(
    input: DeleteCustomerInput
  ): Promise<DeleteCustomerMutation> {
    const statement = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
        deleteCustomer(input: $input) {
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
    return <DeleteCustomerMutation>response.data.deleteCustomer;
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
  async UpdateSurvey(input: UpdateSurveyInput): Promise<UpdateSurveyMutation> {
    const statement = `mutation UpdateSurvey($input: UpdateSurveyInput!) {
        updateSurvey(input: $input) {
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
    return <UpdateSurveyMutation>response.data.updateSurvey;
  }
  async DeleteSurvey(input: DeleteSurveyInput): Promise<DeleteSurveyMutation> {
    const statement = `mutation DeleteSurvey($input: DeleteSurveyInput!) {
        deleteSurvey(input: $input) {
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
    return <DeleteSurveyMutation>response.data.deleteSurvey;
  }
  async GetCustomer(id: string): Promise<GetCustomerQuery> {
    const statement = `query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
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
  async GetSurvey(id: string): Promise<GetSurveyQuery> {
    const statement = `query GetSurvey($id: ID!) {
        getSurvey(id: $id) {
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSurveyQuery>response.data.getSurvey;
  }
  async ListSurveys(
    filter?: ModelSurveyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSurveysQuery> {
    const statement = `query ListSurveys($filter: ModelSurveyFilterInput, $limit: Int, $nextToken: String) {
        listSurveys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
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
    return <ListSurveysQuery>response.data.listSurveys;
  }
  OnCreateCustomerListener: Observable<
    OnCreateCustomerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCustomer {
        onCreateCustomer {
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
      }`
    )
  ) as Observable<OnDeleteCustomerSubscription>;

  OnCreateSurveyListener: Observable<OnCreateSurveySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateSurvey {
        onCreateSurvey {
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
      }`
    )
  ) as Observable<OnCreateSurveySubscription>;

  OnUpdateSurveyListener: Observable<OnUpdateSurveySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSurvey {
        onUpdateSurvey {
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
      }`
    )
  ) as Observable<OnUpdateSurveySubscription>;

  OnDeleteSurveyListener: Observable<OnDeleteSurveySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSurvey {
        onDeleteSurvey {
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
      }`
    )
  ) as Observable<OnDeleteSurveySubscription>;
}
