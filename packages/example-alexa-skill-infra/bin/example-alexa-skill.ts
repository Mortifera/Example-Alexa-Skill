#!/usr/bin/env node
import * as dotenv from 'dotenv';

process.env = {
    ...process.env,
    ...dotenv.config().parsed,
};

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ExampleAlexaSkillStack } from '../lib/example-alexa-skill-stack';

const alexaVendorId = process.env.ALEXA_VENDOR_ID;
const lwaClientId = process.env.LWA_CLIENT_ID;
const lwaClientSecret = process.env.LWA_CLIENT_SECRET;
const lwaRefreshToken = process.env.LWA_REFRESH_TOKEN;

if (!lwaClientId || !alexaVendorId || !lwaClientSecret || !lwaRefreshToken) {
    throw new Error("Need to configure LWA_CLIENT_ID, ALEXA_VENDOR_ID, LWA_CLIENT_SECRET, and LWA_REFRESH_TOKEN environment variables or in .env")
}

const app = new cdk.App();
new ExampleAlexaSkillStack(app, 'ExampleAlexaSkillStack', {
    ssmPrefix: 'example-alexa-skill',
    alexaVendorId,
    lwaClientId,
    lwaClientSecret,
    lwaRefreshToken,
});