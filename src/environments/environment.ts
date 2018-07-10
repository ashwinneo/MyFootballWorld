// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  type: 'local',
  localBaseUrl: 'http://localhost:3000/', //Local Url
  service: {
  login: {
    login: 'getLoginDetails',
    updatePassword: 'updateUserDetails',
    signUp: 'signUp'
  },
  leagues: {
    leagues: 'leagues',
    league: 'league',
    addLeague: 'createLeague',
    editLeague: 'editLeague',
    deleteLeague: 'deleteLeague',
    getLeague: 'getLeague'
  },
  team:{
    teamInfo: 'teamInfo'
  }
}
};
