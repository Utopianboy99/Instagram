"use client"
import React, { useState } from "react";
import { Grid, Box, Button } from "@mui/material";

const Suggestion = () => {
  const [isFollowing, setIsFollowing] = useState({ id: "", state: false })
  const toggleFollow = (id) => {
    setIsFollowing({ id, state: !isFollowing.state })
  }
  const users = [
    {
      id: "1",
      text: 'Followed by'
    },
    {
      id: "2",
      text: 'Followed by'
    },
    {
      id: "3",
      text: 'Followed by'
    },
    {
      id: "4",
      text: 'Followed by'
    },
    {
      id: "5",
      text: 'Followed by'
    },
  ];

  return (
    <>
      <Box
        bgcolor="black"
        color="white"
        width={330}
        height={515}
        position="relative"
        left={920}
        p={2}
        m={2}
      >

        <Grid className="inside-border">
          <div className="users-holder">
            <div className="user">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>
            <p>Tressy King</p>

            <div className="user-name">
              {/* <span>Tressy</span> */}
            </div>
            <Button>switch</Button>
          </div>
        </Grid>

        <div className="suggestions">
          <h3>suggested for you</h3>
          <h5>see all</h5>
        </div>

        <Grid className="follow">
          {users.map((item, index) =>
            <div className="map-holder" key={index}>
              <div className="suggested-people">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>

                <div className="suggested-user">
                  User Name
                  <br />
                  <p>{item.text}</p>
                </div>
                <div className="follow-btn">
                  <Button onClick={() => toggleFollow(item.id)}>{isFollowing.state && item.id == isFollowing.id ? "Following" : "Follow"}</Button>

                </div>
              </div>
            </div>
          )}
        </Grid>


        <div className="footer">
          <a href="">About</a>
          <span>.</span>
          <a href="">Help</a>
          <span>.</span>
          <a href="">Press</a>
          <span>.</span>
          <a href="">API</a>
          <span>.</span>
          <a href="">Jobs</a>
          <span>.</span>
          <a href="">Privacy</a>
          <span>.</span>
          <a href="">Terms</a>
          <span>.</span>
          <a href="">Locations</a>
          <span>.</span>
          <a href="">Language</a>
          <span>.</span>
          <a href="">Meta Verified</a>
        </div>
        <div className="footer-bottom">
          <p>© 2023 INSTAGRAM FROM META</p>
        </div>
      </Box>
    </>
  );
}

export default Suggestion;