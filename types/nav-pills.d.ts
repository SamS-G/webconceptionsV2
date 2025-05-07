export interface NavItem {
    id: string;
    title: string;
    active?: boolean;
}
export interface TabContentItem {
    h3: string;
    h4: string;
    p?: string;
    ul?: string[];
    optional?: string;
}
export interface NavPillItem {
    'navItem': NavItem;
    'tabContent': TabContentItem[];
}

export  interface NavPills {
    navPills: NavPillItem[];
}