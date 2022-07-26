export class urls{
    static gitLabCreateGroupURL = 'https://gitlab.eng.vmware.com/api/v4/groups/';
    static gitLabAddBotURL = 'https://gitlab.eng.vmware.com/api/v4/groups/{group-id}/members';
    static groupOnboarding = 'https://horizon-devfw.svc.eng.vmware.com/job/GroupOnBoarding/buildWithParameters';
    static serviceOnboarding = 'https://horizon-devfw.svc.eng.vmware.com/job/ServiceOnBoarding/buildWithParameters';
    static createRole = 'https://console-stg.cloud.vmware.com/csp/gateway/iam-roles-mgmt/api/services/{serviceId}/roles';
    static generateAccessToken = 'https://console-stg.cloud.vmware.com/csp/gateway/am/api/auth/api-tokens/authorize'
    static getAllUserOwnedGroup = "https://gitlab.eng.vmware.com/api/v4/groups?owned=true";
    static getAllProjectOfParticularGroup = "https://gitlab.eng.vmware.com/api/v4/groups/{group-id}/projects";
    static getDependency = "https://gitlab.eng.vmware.com/api/v4/projects/{project-id}/repository/tree";
    static addCommonService = "https://gitlab.eng.vmware.com//api/v4/projects/";
    static getAllBuildsOfSpecifiedJob = "https://horizon-devfw.svc.eng.vmware.com/job/{job-name}/api/json?tree=builds[name,result,url,timestamp,id]"
    static getFullConsoleOutput = "https://horizon-devfw.svc.eng.vmware.com/job/{job-name}/{build-id}/logText/progressiveText"
}