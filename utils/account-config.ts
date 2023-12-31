import { AgentModelName, SubscriptionPlan } from '@prisma/client';

type Plan = {
  type: SubscriptionPlan;
  label: string;
  limits: {
    maxAgents: number;
    maxAgentsQueries: number;
    maxDatastores: number;
    maxDatasources: number;
    maxFileSize: number; // in bytes
    maxDataProcessing: number; // in bytes

    // e.g.: Crisp / Slack thread summary
    maxSummary: number;

    maxWebsiteURL: number;
  };
};

export const queryCountConfig = {
  [AgentModelName.gpt_3_5_turbo]: 1,
  [AgentModelName.gpt_3_5_turbo_16k]: 2,
  [AgentModelName.gpt_4]: 2,
  [AgentModelName.gpt_4_32k]: 4,
};

const config: {
  [key in SubscriptionPlan]: Plan;
} = {
  [SubscriptionPlan.level_0]: {
    type: SubscriptionPlan.level_0,
    label: 'Free',
    limits: {
      maxAgents: 1,
      maxAgentsQueries: 20,
      maxDatastores: 1,
      maxDatasources: 10, // per datastore
      maxFileSize: 1000000, // 1 MB
      maxDataProcessing: 5000000, // 5 MB
      maxSummary: 10,
      maxWebsiteURL: 10,
    },
  },
  // [SubscriptionPlan.level_0]: {
  //   type: SubscriptionPlan.level_0,
  //   label: 'Free',
  //   limits: {
  //     maxAgents: 100000,
  //     maxAgentsQueries: 2000000,
  //     maxDatastores: 100000,
  //     maxDatasources: 10000000, // per datastore
  //     maxFileSize: 100000000, // 100 MB
  //     maxDataProcessing: 500000000, // 500 MB
  //     maxSummary: 100000,
  //     maxWebsiteURL: 10000,
  //   },
  // },
  [SubscriptionPlan.level_1]: {
    type: SubscriptionPlan.level_1,
    label: 'Growth',
    limits: {
      maxAgents: 2,
      maxAgentsQueries: 1000,
      maxDatastores: 2,
      maxDatasources: 100, // per datastore
      maxFileSize: 5000000, // 5 MB
      maxDataProcessing: 50000000, // 50 MB
      maxSummary: 100,
      maxWebsiteURL: 50,
    },
  },
  [SubscriptionPlan.level_2]: {
    type: SubscriptionPlan.level_2,
    label: 'Pro',
    limits: {
      maxAgents: 5,
      maxAgentsQueries: 10000,
      maxDatastores: 10,
      maxDatasources: 500, // per datastore
      maxFileSize: 10000000, // 10 MB
      maxDataProcessing: 100000000, // 100 MB
      maxSummary: 200,
      maxWebsiteURL: 500,
    },
  },
  [SubscriptionPlan.level_3]: {
    type: SubscriptionPlan.level_3,
    label: 'Enterprise',
    limits: {
      //  No limits
      maxAgents: 100,
      maxAgentsQueries: 100000,
      maxDatastores: 100,
      maxDatasources: 500,
      maxFileSize: 20000000,
      maxDataProcessing: 500000000,
      maxSummary: 500,
      maxWebsiteURL: 10000,
    },
  },
};

export default config;
