const pre = [];

export default function Write() {
    const router = useRouter();

    useEffect(() => {
        const img = new Image();
        img.src = "/giveeup.gif";
        img.onload = () => {
            pre.push(img);
        };
    }, []);

    const onClickMove = () => {
        router.push("/31-image/imgae-preload/moved");
    };
    return(
        <>
            <button onClick={onClickMove}>이미지보여주기</button>
        </>
    );
}
