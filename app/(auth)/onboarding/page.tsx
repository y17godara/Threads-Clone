import AccountProfile from "@forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

interface Props {
  user: number;
  userInfo: {
    _id: string;
  };
}

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName + " " + user?.lastName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl || "",
  };

  return (
    <>
      <main className="mx-auto flex max-w-3x1 flex-col justify-start px-20 py-10">
        <h1 className="head-text">Onboarding</h1>
        <p className="mt-3 text-base-regular text-light-2">
          Complete your profile now to use Threads
        </p>

        <section className="mt-9 bg-dark-2 p-10">
          <AccountProfile user={userData} btnTitle="Continue" />
        </section>
      </main>
    </>
  );
}

export default Page;
