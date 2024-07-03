export type TSidebarNavItems = {
    title: string;
    path: string;
    section?: string;
    isSubSection?: boolean;
    isDisabled: boolean;
    isExternalLink?: boolean;
}[];