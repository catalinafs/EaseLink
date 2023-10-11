import { PrismaClient } from "@prisma/client";

export default function ShortIdPage() {
    return (
        <div>
            asdsdasd
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const prismaFind = new PrismaClient();
    const { shortId } = params;


    const data = await prismaFind.link.findUnique({
        where: { shortUrl: shortId },
    });

    prismaFind.$disconnect();

    if (!data) {
        return { redirect: { destination: '/' } }
    }

    return { redirect: { destination: data.url } }
}