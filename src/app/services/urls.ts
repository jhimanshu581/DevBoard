export class urls{
    static gitLabCreateGroupURL = 'https://gitlab.eng.vmware.com/api/v4/groups/';
    static gitLabAddBotURL = 'https://gitlab.eng.vmware.com/api/v4/groups/{group-id}/members';
    static groupOnboarding = 'https://horizon-devfw.svc.eng.vmware.com/job/GroupOnBoarding/buildWithParameters';
    static serviceOnboarding = 'https://horizon-devfw.svc.eng.vmware.com/job/ServiceOnBoarding/buildWithParameters';
    static createRole = 'https://console-stg.cloud.vmware.com/csp/gateway/iam-roles-mgmt/api/services/{serviceId}/roles';
    static generateAccessToken = 'https://console-stg.cloud.vmware.com/csp/gateway/am/api/auth/api-tokens/authorize'
}