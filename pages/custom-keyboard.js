import Head from "next/head";
import Navbar from "../components/Navbar";
import FooterInfo from "../components/FooterInfo";
import {useEffect} from "react";
import KeyboardCard from "../components/KeyboardCard";
import KeyboardModal from "../components/KeyboardModal";


const initializeKeyboardModal = () => {
    const modalOpenBtns = document.querySelectorAll(".keyboard-modal-openBtn");

    modalOpenBtns.forEach(modalOpenBtn => {
        const modal = modalOpenBtn.closest("article").querySelector(".keyboard-modal");
        const modalCloseBtn = modal.querySelector(".keyboard-modal-closeBtn");

        modalOpenBtn.addEventListener("click", () => {
            modal.classList.add("keyboard-modal-active");
        });

        modalCloseBtn.addEventListener("click", () => {
            modal.classList.remove("keyboard-modal-active");
        });

        window.addEventListener("click", (evt) => {
            if (evt.target === modal) {
                modal.classList.remove("keyboard-modal-active");
            }
        });
    });
};


const CustomKeyboardPage = () => {
    useEffect(() => {
        initializeKeyboardModal();
    }, []);

    return (
        <>
            <Head>
                <title>Custom Keyboard</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                <section id="keyboard-main-section">
                    <h1>My Keyboard</h1>
                    <div>
                        <article id="tofu60-article">
                            <KeyboardCard title={"Tofu60"} src={"Tofu60/My%20Tofu60.jpg"}>
                                My first ever build, a Tofu60 with 1976 colour wave.
                                Light to press yet tactile, comfortable to type and not fatiguing to game with.
                            </KeyboardCard>

                            <KeyboardModal title={"Tofu60"} src={"Tofu60/My%20Tofu60%2016x9.jpg"}>
                                <div className="tofu60-intro">
                                    <h2>Intro</h2>
                                    <p>
                                        I have followed the custom keyboard for a while before I finally decided
                                        to build one myself.
                                        All keyboards I&apos;ve own prior to my Tofu60 are very annoying to type
                                        with
                                        and rattly, but most importantly
                                        they were all light and cheap.
                                    </p>
                                </div>
                                <div className="tofu60-build-experience">
                                    <h2>Build Experience</h2>
                                    <p>
                                        Since this is my first custom keyboard build, there were some tricky
                                        stuff like having a consistent
                                        amount of dielectric grease for each switch. But for the most part, it
                                        went really well.
                                    </p>

                                    <h3>Case</h3>
                                    <p>
                                        I chose to go with the Tofu60 case from KBDfans. This case is all
                                        aluminum, feels sturdy and heavy.
                                        One of the most popular beginner case, it&apos;s also compact with only
                                        60%
                                        the size of a full size keyboard.
                                        In addition, I added some foam to the case to dampen the sound.
                                    </p>

                                    <h3>Switch</h3>
                                    <div id="tofu60-switch-content">
                                        <p>
                                            I always loved keyboards with tactility but not loud and clicky,
                                            this is why I used Zealio V2 as the switch of my first build.
                                            <br/><br/>
                                            I went with the 62g spring version because it&apos;s light to code
                                            with and not too fatiguing when gaming.
                                            <br/><br/>
                                            The switch is also applied with Trbisosy 3204 for better
                                            smoothness, it&apos;s also filmed with Deskey films to reduce
                                            housing wobble for better sounding.
                                        </p>
                                        <img
                                            src="/Custom%20Keyboard%20Images/Tofu60/My%20Tofu60%20Switches.jpg"
                                            alt="Tofu60 Switches"/>
                                    </div>

                                    <h3>Plate</h3>
                                    <p>
                                        I went with a brass plate because brass plate makes the keyboard sound
                                        more clacky and that&apos;s what I&apos;m going for.
                                        I also cut some neoprene foam strips and adhere them on the plate to
                                        dampen the sound a bit more.
                                    </p>

                                    <h3>PCB</h3>
                                    <p>
                                        For PCB, I went with the DZ60, this PCB is very versatile and cheap,
                                        with support of many key layouts as well as easy key programming.
                                        The only downside is that the keys has to be soldered on, which means I
                                        have to unsolder switches if I want to replace them.
                                        But, I have a lot of experience with soldering from fixing gaming
                                        consoles so that wasn&apos;t a big deal for me.
                                    </p>
                                </div>
                            </KeyboardModal>
                        </article>
                    </div>
                </section>
            </main>

            <footer>
                <FooterInfo />
            </footer>
        </>
    );
};

export default CustomKeyboardPage;