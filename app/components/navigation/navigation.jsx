"use client"
// import { useState } from "react";
import React from "react";
import { useState } from "react";
import { Box, Grid, Typography, Button, Popover, PaperProps } from "@mui/material";
import styles from '@/app/components/navigation/navigation.module.css'
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';







const Navigation = () => {

    const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMoreButtonClick = (event) => {
        setMoreMenuOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleMoreMenuClose = () => {
        setMoreMenuOpen(false);
        setAnchorEl(null);
    };

    return (
        <Box className={styles.navbar}>
            <Grid className={styles.optholder}>
                <h1 className={styles.logoname}>Instagram</h1>
                <Grid className={styles.options}>
                    <Button href="/" className={styles.link1}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 15 15"
                            >
                                <path
                                    fill="currentColor"
                                    d="M7.825.12a.5.5 0 0 0-.65 0L0 6.27v7.23A1.5 1.5 0 0 0 1.5 15h4a.5.5 0 0 0 .5-.5v-3a1.5 1.5 0 0 1 3 0v3a.5.5 0 0 0 .5.5h4a1.5 1.5 0 0 0 1.5-1.5V6.27L7.825.12Z"
                                />
                            </svg>
                        </span>
                        Home
                    </Button>
                    <Button href="/explore" className={styles.link2}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10.68 11.74a6 6 0 0 1-7.922-8.982a6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
                                />
                            </svg>
                        </span>
                        Search
                    </Button>
                    <Button href="/explore" className={styles.link3}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="m203.97 23l-18.032 4.844l11.656 43.468c-25.837 8.076-50.32 21.653-71.594 40.75L94.53 80.594l-13.218 13.22l31.376 31.374c-19.467 21.125-33.414 45.53-41.813 71.343l-42.313-11.343l-4.843 18.063l42.25 11.313c-6.057 27.3-6.157 55.656-.345 83L23.72 308.78l4.843 18.064l41.812-11.22a193.261 193.261 0 0 0 31.25 59.876l-29.97 52.688l-16.81 29.593l29.56-16.842l52.657-29.97a193.306 193.306 0 0 0 60.094 31.407l-11.22 41.844l18.033 4.81l11.218-41.905a195.701 195.701 0 0 0 83-.375l11.312 42.28l18.063-4.81l-11.344-42.376c25.812-8.4 50.217-22.315 71.342-41.78l31.375 31.373l13.22-13.218l-31.47-31.47a193.26 193.26 0 0 0 40.72-71.563l43.53 11.657l4.813-18.063l-43.625-11.686a195.693 195.693 0 0 0-.344-82.063l43.97-11.78l-4.813-18.063L440.908 197c-6.73-20.866-17.08-40.79-31.032-58.844l29.97-52.656l16.842-29.563l-29.593 16.844l-52.656 29.97c-17.998-13.875-37.874-24.198-58.657-30.906l11.783-44L309.5 23l-11.78 43.97c-27-5.925-55.02-6.05-82.064-.376L203.97 23zm201.56 85L297.25 298.313l-.75.437l-40.844-40.875l-148.72 148.72l-2.186 1.25l109.125-191.75l41.78 41.78L405.532 108zm-149.686 10.594c21.858 0 43.717 5.166 63.594 15.47l-116.625 66.342l-2.22 1.28l-1.28 2.22l-66.25 116.406c-26.942-52.04-18.616-117.603 25.03-161.25c26.99-26.988 62.38-40.468 97.75-40.468zm122.72 74.594c26.994 52.054 18.67 117.672-25.002 161.343c-43.66 43.662-109.263 52.005-161.312 25.033l116.438-66.282l2.25-1.25l1.25-2.25l66.375-116.592z"
                                />
                            </svg>
                        </span>
                        Explore
                    </Button>
                    <Button href="/explore" className={styles.link4}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 48 48">

                                <mask id="ipSVideoTwo0">

                                    <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                                        <path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z" />
                                        <path fill="#fff" d="M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031V28Z" />
                                        <path d="M6 15h36m-9-9l-6 9m-6-9l-6 9" />
                                    </g>

                                </mask>
                                <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVideoTwo0)" />
                            </svg>
                        </span>
                        Reels
                    </Button>

                    <Button href="/notifications" className={styles.link5}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor" fill-rule="evenodd"
                                    d="M14.968 1.966a.75.75 0 0 0-.934-.934l-12.5 3.75a.75.75 0 0 0-.18 1.355L5.952 8.99l-1.731 1.73a.75.75 0 1 0 1.06 1.061l1.731-1.73l2.852 4.595a.75.75 0 0 0 1.355-.18l3.75-12.5ZM8.101 8.96l2.159 3.48l2.417-8.056L8.1 8.96Zm3.515-5.637L3.56 5.74L7.04 7.9l4.576-4.577Z" clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        Messages
                    </Button>
                    <Button href="/profile" className={styles.link6}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor" fill-rule="evenodd"
                                    d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343c1.063 1.196 2.349 2.188 3.603 3.154c.298.23.594.459.885.688c.526.415.995.778 1.448 1.043c.452.264.816.385 1.126.385c.31 0 .674-.12 1.126-.385c.453-.265.922-.628 1.448-1.043c.29-.23.587-.458.885-.688c1.254-.966 2.54-1.958 3.603-3.154c1.289-1.452 2.188-3.146 2.188-5.343c0-2.15-1.215-3.955-2.874-4.713c-1.612-.737-3.778-.542-5.836 1.597a.75.75 0 0 1-1.08 0C9.402 3.882 7.236 3.687 5.624 4.424ZM12 4.46C9.688 2.39 7.099 2.1 5 3.059C2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339c1.166 1.313 2.593 2.412 3.854 3.382c.286.22.563.434.826.642c.513.404 1.063.834 1.62 1.16c.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16a78.6 78.6 0 0 1 .826-.642c1.26-.97 2.688-2.07 3.854-3.382c1.457-1.64 2.567-3.674 2.567-6.339c0-2.712-1.535-5.064-3.75-6.077c-2.099-.96-4.688-.67-7 1.399Z" clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        Notifications
                    </Button>
                    <Button href="/messages" className={styles.link7}>
                        <span className={styles.icon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="37"
                                height="37"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor" fill-rule="evenodd"
                                    d="M4 3.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm6 7a.75.75 0 0 1-.75-.75v-1.5h-1.5a.75.75 0 0 1 0-1.5h1.5v-1.5a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5A.75.75 0 0 1 8 11Z" clip-rule="evenodd"
                                />
                            </svg>
                        </span>
                        Create
                    </Button>

                    <Button className={styles.link8}>
                        <span className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" /><path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20ZM33.63 39.21A17.915 17.915 0 0 1 24 42a17.916 17.916 0 0 1-9.832-2.92c-.24-.3-.483-.61-.73-.93A2.144 2.144 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.077 2.077 0 0 1 35 36.818c0 .48-.165.946-.463 1.31c-.307.374-.61.735-.907 1.082Zm3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466Z" /></g></svg>
                        </span>
                        <Typography>
                            Profile
                        </Typography>
                    </Button>
                    <Button
                        className={styles.menu}
                        onClick={handleMoreButtonClick}
                    >
                        <MenuIcon className={styles.icon} />
                        <Typography>More</Typography>
                    </Button>
                    <Popover
                        className={styles.blackblock}
                        open={isMoreMenuOpen}
                        anchorEl={anchorEl}
                        onClose={handleMoreMenuClose}
                        sx={{width:"500px"}}
                        anchorOrigin={{
                            vertical: "center",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "center",
                            horizontal: "center",
                        }}
                        slotProps={{
                            paper:{sx:{"background":"#262626",
                            width:"255px",
                            margin:"-65px 0px 0px 20px",
                            height:"451px",
                            borderRadius:"9",

                        }}}}
                        // PaperProps={{
                        //     style: {
                        //         borderRadius: "7", // Remove border radius
                        //         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                        //         background: "#262626", // Background color
                        //         maxWidth: "40%", // Adjust the maximum width
                        //     },
                        // }}
                    >
                        <Box className={styles.moreMenu}>
                            <Link href="/settings" >
                                
                                <Typography className={styles.dropdownItem}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M18.362 3.202a2.936 2.936 0 0 0-4.724 0a2.936 2.936 0 0 1-3.25 1.055a2.936 2.936 0 0 0-3.822 2.778a2.936 2.936 0 0 1-2.008 2.763a2.936 2.936 0 0 0-1.46 4.494a2.936 2.936 0 0 1 0 3.416a2.936 2.936 0 0 0 1.46 4.494a2.936 2.936 0 0 1 2.008 2.763a2.936 2.936 0 0 0 3.823 2.778a2.936 2.936 0 0 1 3.249 1.055a2.936 2.936 0 0 0 4.724 0a2.936 2.936 0 0 1 3.25-1.055a2.936 2.936 0 0 0 3.822-2.778a2.936 2.936 0 0 1 2.008-2.763a2.936 2.936 0 0 0 1.46-4.494a2.936 2.936 0 0 1 0-3.416a2.936 2.936 0 0 0-1.46-4.494a2.936 2.936 0 0 1-2.008-2.763a2.936 2.936 0 0 0-3.823-2.778a2.936 2.936 0 0 1-3.249-1.055Zm-7.594 21.86c-5.005-2.89-6.72-9.29-3.83-14.294c2.89-5.005 9.29-6.72 14.294-3.83c5.005 2.89 6.72 9.29 3.83 14.294c-2.89 5.005-9.29 6.72-14.294 3.83Z"/></svg>
                                Settings</Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItem}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><g transform="rotate(-90 128 128)"><path fill="currentColor" d="M232 136.66A104.12 104.12 0 1 1 119.34 24a8 8 0 0 1 1.32 16A88.12 88.12 0 1 0 216 135.34a8 8 0 0 1 16 1.32ZM120 72v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72a8 8 0 0 0-16 0Zm40-24a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm36 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm24 36a12 12 0 1 0-12-12a12 12 0 0 0 12 12Z"/></g></svg>
                                    Your activity</Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItem}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"/></svg>
                                    Saved</Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItem}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 16 16"><g transform="rotate(-90 8 8)"><path fill="currentColor" d="M6 .278a.768.768 0 0 1 .08.858a7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277c.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316a.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71C0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29c0-1.167.242-2.278.681-3.286z"/></g></svg>
                                    Switch appearence</Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItem}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M10 5h2v5h-2V5m0 6h2v2h-2v-2M2 1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1V1m1 2v12h5v1h1v1h1v1h2v-1h1v-1h1v-1h5V3H3Z"/></svg>
                                    Report a problem</Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItemthreads}>
                                <span className={styles.threads}>
                                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="white" d="M5.45 4.623C6.997 2.974 9.24 2 12.017 2c4.565 0 7.592 2.631 8.55 6.277a1 1 0 0 1-1.935.508C17.905 6.022 15.676 4 12.016 4c-2.286 0-3.98.789-5.106 1.99c-1.136 1.212-1.769 2.923-1.769 4.885v2.25c0 1.962.633 3.673 1.769 4.884C8.036 19.212 9.73 20 12.016 20c1.655 0 2.968-.384 3.976-1.005c1.015-.625 1.62-1.454 1.79-2.405c.195-1.096-.045-1.848-.458-2.391a3.227 3.227 0 0 0-.814-.741c-.135.749-.376 1.456-.74 2.01c-1.342 2.039-3.908 2.214-5.6 1.539c-.916-.365-1.701-1.364-1.945-2.435a3.018 3.018 0 0 1 .141-1.843c.265-.636.756-1.178 1.455-1.59c.692-.409 1.72-.597 2.739-.625c.614-.017 1.28.024 1.95.133c-.14-.65-.377-1.135-.644-1.384c-.484-.45-1.286-.767-2.09-.762c-.777.006-1.436.305-1.83.935a1 1 0 1 1-1.696-1.06c.837-1.338 2.216-1.865 3.513-1.875c1.27-.009 2.578.472 3.466 1.298c.898.836 1.284 2.207 1.384 3.454c.874.381 1.7.94 2.305 1.737c.781 1.03 1.117 2.358.833 3.951c-.29 1.624-1.315 2.898-2.71 3.757C15.673 21.54 13.985 22 12.016 22c-2.776 0-5.02-.974-6.565-2.623c-1.536-1.638-2.31-3.864-2.31-6.252v-2.25c0-2.388.774-4.614 2.31-6.252ZM14.6 12.7a8.349 8.349 0 0 0-1.986-.186c-.891.024-1.516.193-1.777.347c-.384.227-.55.458-.624.637a1.022 1.022 0 0 0-.038.63c.122.536.525.938.736 1.021c1.126.45 2.535.212 3.188-.78c.235-.358.422-.96.5-1.669Z"/></g></svg>
                                    Threads</span></Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItem}>Swtich account</Typography>
                            </Link>
                            <Link href="/help">
                                <Typography className={styles.dropdownItem}>logout</Typography>
                            </Link>                            
                        </Box>
                    </Popover>

                </Grid>
            </Grid>
        </Box>
    );
};

export default Navigation