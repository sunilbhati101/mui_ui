import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
  createStyles({
    acmeBtn: {
        border: "1px solid #d4d3d2",
        borderBottom: 0,
        borderRadius: "12px 12px 0 0",
        color: "black",
        marginBottom: "-1px",
        backgroundColor: "white",
      },
  })
);

export default useStyles;
