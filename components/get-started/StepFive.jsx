
"use client";
import { Button, Divider, Input, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'


const socialMediaIcons = {
    "linkedin": "ph:linkedin-logo-fill",
    "twitter": "pajamas:twitter",
    "instagram": "akar-icons:instagram-fill"
};

const StepFive = () => {

    const [socialLinks, setSocialLinks] = useState([]);
    const [newLink, setNewLink] = useState('');
    const [newLinkName, setNewLinkName] = useState('');
    const [showInputs, setShowInputs] = useState(true);
    const [showSocialLinks, setShowSocialLinks] = useState(false);

    const toggleInputsAndSocialLinks = () => {
        setShowInputs(!showInputs);
        setShowSocialLinks(!showSocialLinks);
    }

    const handleSaveNewLink = () => {
        setSocialLinks([...socialLinks, { name: newLinkName, link: newLink }]);
        setNewLink('');
        setNewLinkName('');
    }

    return (
        <div className='flex flex-col space-y-5 py-9 px-10 mx-8'>
            <div className='flex flex-col space-y-2'>
                <h1 className='font-semibold text-3xl'>Add social links</h1>
                <Text className='text-md font'>Confirm your identity by adding one or more social links.</Text>
            </div>

            {
                showSocialLinks && (
                    <>

                        {
                            socialLinks.map((link, index) => (
                                <>
                                    <div key={link.name} className='flex flex-row space-x-4 w-full justify-start items-center'>
                                        <Icon icon="ph:dots-six-vertical" width={30} color='grey' />
                                        <div className='flex flex-row w-full justify-between items-center'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <Icon icon={socialMediaIcons[link.name] || 'websymbol:link'} width={30} />
                                                <span className='text-md font-bold'>{link.name}</span>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <Icon icon="clarity:pencil-line" width={30} />
                                                <Icon icon="fluent:delete-28-regular" width={30} />
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                </>
                            ))
                        }
                        <div className='flex flex-row space-x-3 py-3 items-center'>
                            <Button
                                size='xl'
                                height='43px'
                                width='10%'
                                border='1px'
                                rounded="full"
                                bgColor={'white'}
                                color={'gray.300'}
                                onClick={() => toggleInputsAndSocialLinks()}
                            >
                                <Icon icon="ri:add-fill" color='black' width={30} />
                            </Button>
                            <Button
                                size='xl'
                                height='48px'
                                width='20%'
                                border=''
                                rounded="3xl"
                                bgColor={'white'}
                                color={'black'}
                                _hover={{ bgColor: 'white' }}
                                onClick={() => {
                                    toggleInputsAndSocialLinks();
                                }
                                }
                            >
                                Add Link
                            </Button>
                        </div>

                    </>

                )
            }




            {showInputs && (
                <>
                    <div className='flex flex-col space-y-4'>
                        <Input
                            focusBorderColor='black' placeholder='linkedIn, Twitter, Instagram etc.' padding={6}
                            onChange={(e) => setNewLink(e.target.value)}
                        />
                        <Input
                            focusBorderColor='black' placeholder='Name your link' padding={6}
                            onChange={(e) => setNewLinkName(e.target.value)}
                        />
                    </div>
                    <Button
                        border='1px'
                        color={'black'}
                        rounded="full"
                        padding={6}
                        bgColor={'white'}
                        width='30%'
                        height='40px'
                        onClick={() => {
                            toggleInputsAndSocialLinks();
                            handleSaveNewLink();
                            console.log('Save button clicked');
                        }}
                    >
                        Save
                    </Button>
                </>
            )
            }
            <div className='flex flex-row space-x-3 py-3'>
                <Button
                    size='xl'
                    height='48px'
                    width='10%'
                    border='1px'
                    rounded="full"
                    bgColor={'white'}
                    color={'gray.300'}
                >
                    <Icon icon="uiw:left" color='black' />
                </Button>
                <Button
                    size='xl'
                    height='48px'
                    width='30%'
                    border='1px'
                    rounded="3xl"
                    bgColor={'black'}
                    color={'white'}
                    _hover={{ bgColor: 'gray.700' }}
                >
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default StepFive
