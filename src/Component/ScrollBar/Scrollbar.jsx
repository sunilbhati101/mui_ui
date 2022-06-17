import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
    createStyles({
        oe: {

            "& ::-webkit-scrollbar": {
                width: "6px",
            },

            "& ::-webkit-scrollbar-track": {
                background: "linear-gradient(to bottom, #464D69, rgba(117, 19, 93, 0.73))",
            },

            "& ::-webkit-scrollbar-thumb": {
                borderRadius: "20px",
            },
        }
    })
);

export default useStyles;
