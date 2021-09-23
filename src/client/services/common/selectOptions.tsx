import {banUserOptions, routePackagesRejectModerationOptions, unbanUserOptions, userRoles} from "client/config";
import {
    generateBanUserTranslation,
    generateRoutePackageRejectModerationTranslation, generateUnBanUserTranslation,
    generateUserRoleTranslation
} from "services/common/translations";
import {isAnonymousByRole} from "store/users/selectors";

export const generateRejectModerationsOptions = () => {
    return routePackagesRejectModerationOptions.map((option: any) => {
        return {
            value: option.id,
            label: generateRoutePackageRejectModerationTranslation(option.id)
        }
    });
};

export const generateBanUserOptions = () => {
    return banUserOptions.map((option: any) => {
        return {
            value: option.id,
            label: generateBanUserTranslation(option.id)
        }
    });
};

export const generateUnBanUserOptions = () => {
    return unbanUserOptions.map((option: any) => {
        return {
            value: option.id,
            label: generateUnBanUserTranslation(option.id)
        }
    });
};

export const generateUserRolesOptions = () => {
    return userRoles.filter((role: string) => {
        return !isAnonymousByRole(role);
    }).map((role: string) => {
        return {
            value: role,
            label: generateUserRoleTranslation(role)
        }
    });
};