"use client";

import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      className="flex flex-col items-center justify-center border-t border-solid border-t-[#f5f2f0] px-10 py-5"
      sx={{ backgroundColor: "#f5f2f0", color: "#181311" }}
    >
      <Typography variant="body2" className="text-sm font-normal">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </Typography>
      <Box className="flex gap-4 mt-2">
        <Link href="#" className="text-[#8a7060] text-sm font-normal">
          Privacy Policy
        </Link>
        <Link href="#" className="text-[#8a7060] text-sm font-normal">
          Terms of Service
        </Link>
        <Link href="#" className="text-[#8a7060] text-sm font-normal">
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
