import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
    createStyles({
        btn: {

            "& .Mui-selected": {
                color: "#19191a ! important ",
                backgroundColor: "#959ca9",
                
            },
        },
    })
);

export default useStyles;
