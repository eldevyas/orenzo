import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
    DateTimePicker,
    DateTimePickerTabs,
    DateTimePickerTabsProps,
} from "@mui/x-date-pickers/DateTimePicker";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EventIcon from "@mui/icons-material/ViewDay";
const CustomTabs = (props: DateTimePickerTabsProps) => (
    <React.Fragment>
        <DateTimePickerTabs {...props} />
        <Box sx={{ backgroundColor: "blue", height: 5 }} />
    </React.Fragment>
);

export default function Tabs() {
    const [value, setValue] = React.useState<Dayjs | String>("");

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label="When will you be available for a call?"
                className="TimeControl"
                renderInput={(params) => <TextField {...params} />}
                value={value}
                onChange={(newValue: any) => {
                    setValue(newValue);
                }}
                minDate={dayjs().add(1, "day")}
                maxDate={dayjs().add(7, "day")}
                minTime={dayjs().set("hour", 8)}
                maxTime={dayjs().set("hour", 17)}
                hideTabs={false}
                components={{ Tabs: CustomTabs }}
                componentsProps={{
                    tabs: {
                        dateRangeIcon: <EventIcon />,
                        timeIcon: <AccessTimeFilledIcon />,
                    },
                }}
            />
        </LocalizationProvider>
    );
}
