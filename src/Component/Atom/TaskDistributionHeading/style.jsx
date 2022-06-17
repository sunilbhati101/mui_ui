import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
    createStyles({
        btn: {
            "& .Mui-selected": {
                color: "#111212 ! important ",
                backgroundColor: "#959ca9",
                
            },
        },

        chatpadding: {
            " .recharts-responsive-container" :{
                padding: "49px 0",
            },
        }    
    })
);

export default useStyles;
