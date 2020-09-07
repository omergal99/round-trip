import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GTranslateIcon from '@material-ui/icons/GTranslate';

import CopyrightIcon from '@material-ui/icons/Copyright';
import { footer } from '../services/data/globalData';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'baseline',
    gap: '1rem',
    backgroundColor: '#535353',
  },
  topSection: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: '1.5rem var(--left-right-padding)',
  },
  wrapImg: {
    width: '35%',
    padding: '1rem 0',
    margin: '0 auto',
    '& img': {
      width: '100%',
      maxWidth: 'max-content',
    }
  },
  wrapLinkSection: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    padding: '1rem calc(var(--left-right-padding) * 2) 1rem 0',
  },
  linkSection: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'baseline',
    paddingLeft: '1rem',
  },
  linkSectionTitle: {
    color: 'var(--font-color)',
    padding: '0.25rem 0',
    fontWeight: 500,
  },
  link: {
    color: 'var(--gray-light)',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '0.25rem 0',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  bottomSection: {
    backgroundColor: '#3b3b3b',
    color: 'var(--font-color)',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem var(--left-right-padding)',
  },
  bottomIcons: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  socialIcons: {
    cursor: 'pointer',
    backgroundColor: 'var(--font-color)',
    color: '#535353',
    border: '1px solid white',
    borderRadius: '50%',
    padding: '4px',
    transition: 'all .2s',
    '&:hover': {
      borderColor: '#3b3b3b',
      backgroundColor: '#3b3b3b',
      color: 'var(--font-color)',
    },
  },
  backToTopIcon: {
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '50%',
    transition: 'all .2s',
    '&:hover': {
      borderColor: 'var(--font-color)',
      backgroundColor: 'var(--font-color)',
      color: '#3b3b3b',
    },
  },
  copyRight: {
    padding: '1rem',
    color: 'var(--gray-light)',
    alignItems: 'flex-end',
  },
})

const ICONS_FONT_SIZE = 46

export default function Footer() {
  // console.log('Footer');
  const classes = useStyles();

  const goUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const goToLinkAddress = link => {
    console.log('Go to link', link);
  }

  const footerLink = footer.footerLinks.map(item => {
    return <div className={classes.linkSection} key={item.title}>
      <h2 className={classes.linkSectionTitle}>{item.title}</h2>
      {item.links.map((link, idx) => {
        return <span key={idx} className={classes.link} onClick={() => goToLinkAddress(link)}>
          {link}
        </span>
      }
      )}
    </div>
  })

  const socialIcon = [<GTranslateIcon />, <TwitterIcon />, <FacebookIcon />, <InstagramIcon />];
  const socialList = socialIcon.map((item, idx) => {
    const props = { className: classes.socialIcons, style: { fontSize: ICONS_FONT_SIZE } };
    return <React.Fragment key={idx}>{React.cloneElement(item, props)}</React.Fragment>;
  })

  return (
    <div className={classes.root} >

      <div className={classes.topSection}>
        <div className={classes.wrapImg}>
          <img alt="" src={require('../assets/img/bottomLogo.png')} />
        </div>
        <div className={classes.wrapLinkSection}>
          {footerLink}
        </div>
      </div>

      <div className={classes.bottomSection}>
        <span className={`flex-center ${classes.copyRight}`}>
          <CopyrightIcon style={{ fontSize: 18, marginLeft: '0.5rem' }} />
          <span>{footer.copyrights}</span>
        </span>

        <div className={classes.bottomIcons}>
          {socialList}
          <span className={`flex-center ${classes.backToTopIcon}`} onClick={goUp}>
            <ArrowUpwardIcon style={{ fontSize: ICONS_FONT_SIZE }} />
          </span>
        </div>
      </div>
    </div>
  )
}
