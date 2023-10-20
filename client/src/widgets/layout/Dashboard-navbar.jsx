import { useNavigate } from "react-router-dom";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
} from "@material-tailwind/react";
import {
    BellIcon,
    ClockIcon,
    CreditCardIcon,
} from "@heroicons/react/24/solid";
import appAxios from '../../helper/appAxios';

export function DashboardNavbar() {
    const navigate = useNavigate();

    var cikisYap = () => {
        appAxios.post('/logout', {})
            .then(response => {
                console.log(response);
                localStorage.removeItem('token');
                localStorage.removeItem('name');
                navigate(`/`);
            })
            .catch(error => {
                console.error('Çıkış başarısız:', error);
            });
    }

    return (
        <Navbar>
            <div className="flex flex-col-reverse justify-end gap-6 md:flex-row md:items-center bg-blue-gray-300">
                <div className="flex items-center">
                    <Menu>
                        <MenuHandler>
                            <Button
                                variant="text"
                                className="text-blue-gray-500 w-10 flex justify-center"
                            >
                                <p>{localStorage.getItem('name')}</p>
                            </Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <Typography variant="small" className="font-normal">
                                    My Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                                    />
                                </svg>
                                <Typography variant="small" className="font-normal">
                                    Inbox
                                </Typography>
                            </MenuItem>
                            <hr className="my-2 border-blue-gray-50" />
                            <MenuItem className="flex items-center gap-2 " onClick={cikisYap}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                                    />
                                </svg>
                                <Typography variant="small" className="font-normal">
                                    Sign Out
                                </Typography>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuHandler>
                            <IconButton variant="text" color="blue-gray">
                                <BellIcon className="h-5 w-5 text-blue-gray-500" />
                            </IconButton>
                        </MenuHandler>
                        <MenuList className="w-max border-0">
                            <MenuItem className="flex items-center gap-3">
                                <Avatar
                                    src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                                    alt="item-1"
                                    size="sm"
                                    variant="circular"
                                />
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-1 font-normal"
                                    >
                                        <strong>New message</strong> from Laur
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                                    >
                                        <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                                    </Typography>
                                </div>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-4">
                                <Avatar
                                    src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                                    alt="item-1"
                                    size="sm"
                                    variant="circular"
                                />
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-1 font-normal"
                                    >
                                        <strong>New album</strong> by Travis Scott
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                                    >
                                        <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                                    </Typography>
                                </div>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-4">
                                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                                    <CreditCardIcon className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="mb-1 font-normal"
                                    >
                                        Payment successfully completed
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center gap-1 text-xs font-normal opacity-60"
                                    >
                                        <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                                    </Typography>
                                </div>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </Navbar>
    );
}

export default DashboardNavbar;
