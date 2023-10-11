import React from "react";
import { Box, Grid, Typography, Button, Popover} from "@mui/material";
import styles from '@/app/components/navigation/navigation.module.css'
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';







const Navigation = () => {

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
    }

    return (
        <Box className={styles.navbar}>
            <Grid className={styles.optholder}>
                <h1 className={styles.logoname}>Instagram</h1>
                <Grid className={styles.options}>
                    <Button href="/home" className={styles.link1}>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 27a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm0-2a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/><path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20ZM33.63 39.21A17.915 17.915 0 0 1 24 42a17.916 17.916 0 0 1-9.832-2.92c-.24-.3-.483-.61-.73-.93A2.144 2.144 0 0 1 13 36.845c0-1.077.774-1.98 1.809-2.131c6.845-1 11.558-.914 18.412.035A2.077 2.077 0 0 1 35 36.818c0 .48-.165.946-.463 1.31c-.307.374-.61.735-.907 1.082Zm3.355-2.744c-.16-1.872-1.581-3.434-3.49-3.698c-7.016-.971-11.92-1.064-18.975-.033c-1.92.28-3.335 1.856-3.503 3.733A17.94 17.94 0 0 1 6 24c0-9.941 8.059-18 18-18s18 8.059 18 18a17.94 17.94 0 0 1-5.015 12.466Z"/></g></svg>
                        </span>
                        <Typography>
                            Profile
                        </Typography>
                    </Button>
                    <Button className={styles.menu}>
                        <MenuIcon className={styles.icon} />
                        <Typography>
                            More
                        </Typography>
                    </Button>
                    
                </Grid>
            </Grid>
        </Box>
    );
};

export default Navigation