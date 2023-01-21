import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './GithubLink.css'
import {
    AwesomeButton,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';

export default function GitHubLink() {
    return (
        <a
            
            href="https://github.com/CodingWithEnjoy">
            <AwesomeButton className='aws-btn1'>
                <BsGithub className='github_icon' />
            </AwesomeButton>
        </a>
    )
}
