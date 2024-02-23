/*
 * A few things are happening here:

loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.
Since <SideNav> is static, it's shown immediately. The user can interact with <SideNav> while the dynamic content is loading.
The user doesn't have to wait for the page to finish loading before navigating away (this is called interruptable navigation).
Congratulations! You've just implemented streaming. But we can do more to improve the user experience. Let's show a loading skeleton instead of the Loading… text.
 */

import DashboardSkeleton from '@/app/ui/skeletons';
//You could give a skeleton for the whole dashboard page by adding a loading,
//but in page we also use Suspense and this is useless now
export default function Loading() {
    return <DashboardSkeleton />
}