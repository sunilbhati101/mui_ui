import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
    createStyles({
        btn: {

            "& .Mui-selected": {
                color: "#111212 ! important ",
                backgroundColor: "#959ca9",
                
            },
        },
    })
);

export default useStyles;
