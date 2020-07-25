import { Config } from './configManager';

const DEFAULT_CONFIG: Config = {
  scraping: {
    numDaysBack: 40,
    showBrowser: false,
    accountsToScrape: [
    ]
  },
  outputVendors: {
    ynab: {
      active: false,
      accessToken: 'YNAB_ACCESS_TOKEN_GOES_HERE',
      budgetId: '########-####-####-####-############',
      accountNumbersToYnabAccountIds: {
        1234: '########-####-####-####-############',
        5678: '########-####-####-####-############',
        4837: '########-####-####-####-############'
      },
      options: {}
    },
    googleSheets: {
      active: false,
      options: {
        spreadsheetId: '############################################',
        sheetName: '###############',
        credentialsFilePath: '/###########/google_api_credentials.json'
      }
    }
  },
  monitoring: {
    email: {
      toEmailAddress: 'joe@someemail.com',
      sendgridApiKey: process.env.SENDGRID_API_KEY,
      sendReport: false
    }
  }
};

export default DEFAULT_CONFIG;
