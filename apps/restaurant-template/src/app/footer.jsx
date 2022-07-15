import '../../src/styles.css';
import { Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer className="headTextContainer" id="footer">
            <Typography variant = 'h5'>
                Connect with us
            </Typography>
            <li><TwitterIcon /></li>
            <li><InstagramIcon /></li>
            <li><YouTubeIcon /></li>
        </footer>
    )
}