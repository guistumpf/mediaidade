import Submissoes from "../components/page";
import BackButton from "../components/backbutton";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function SubPage() {
    return (
        <Submissoes>
            <BackButton />
        </Submissoes>
    )
}