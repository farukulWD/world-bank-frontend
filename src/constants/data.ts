export interface MemberTypes {
    postTitle: string;
    type: string;
    postedDate: string;
    postCategory: string;
    views: string | number;
    reactions: string | number;
    comments: string | number;
}
export const members: MemberTypes[] = [
    {
        postTitle: 'Social Media Post',
        type: 'Audio',
        postedDate: 'May 12, 2024 11:00 AM',

        postCategory: 'Manual',
        views: 1200,
        reactions: 1000,
        comments: 90,
    },
    {
        postTitle: 'Blog Article',
        type: 'Text',
        postedDate: 'June 8, 2024 9:30 AM',

        postCategory: 'Automated',
        views: 1500,
        reactions: 1200,
        comments: 110,
    },
    {
        postTitle: 'Podcast Episode',
        type: 'Audio',
        postedDate: 'April 23, 2024 4:15 PM',

        postCategory: 'Manual',
        views: 2200,
        reactions: 1750,
        comments: 230,
    },
    {
        postTitle: 'Product Launch',
        type: 'Video',
        postedDate: 'March 12, 2024 2:00 PM',

        postCategory: 'Automated',
        views: 3200,
        reactions: 2900,
        comments: 150,
    },
    {
        postTitle: 'Webinar Announcement',
        type: 'Text',
        postedDate: 'February 5, 2024 10:00 AM',

        postCategory: 'Manual',
        views: 1000,
        reactions: 850,
        comments: 70,
    },
    {
        postTitle: 'Tutorial Video',
        type: 'Video',
        postedDate: 'January 18, 2024 6:45 PM',

        postCategory: 'Automated',
        views: 2700,
        reactions: 2450,
        comments: 180,
    },
];
