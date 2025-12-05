import { stackServerApp } from '@/stack/server';
import { SignUp } from '@stackframe/stack';

const page = async () => {

    const user = await stackServerApp.getUser();
    const app = stackServerApp.urls;

    return (
        <>
            {user ? (
                <div>Products Table</div>
            ) : (
                <div className="flex justify-center mt-20 items-center">
                    <SignUp />
                </div>
            )}
        </>
    )
}
export default page