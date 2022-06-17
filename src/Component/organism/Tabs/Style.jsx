import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
    createStyles({
        tabs: {
            color: "text.secondary",
            textTransform: 'capitalize',
            fontWeight: "bold",

            "& .Mui-selected": {
                backgroundColor: "#babdc2",
                color: "#19191a ! important ",
                borderRadius: 30,
            },

            "& .MuiTabs-indicator": {
                display: "none"
            },
        },
    })
);

export default useStyles;
