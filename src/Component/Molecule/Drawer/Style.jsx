import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) =>
  createStyles({   
    oe: {
      "& ::-webkit-scrollbar": {
        width: "6px",
        overflowY: "scroll",

      },   

      "& ::-webkit-scrollbar-thumb": {
        background: "#555",        
        borderRadius: "20px",
        overflowY: "scroll",

      },

      "& .MuiDrawer-root.MuiDrawer-docked.makeStyles-oe-1.css-1f950fz-MuiDrawer-docked": {
        overflow: "hidden",
      },
      "& .MuiDrawer-root.MuiDrawer-docked.makeStyles-oe-1.css-1f950fz-MuiDrawer-docked: hover": {
        overflowY: "scroll",
      },
    },
  })
);

export default useStyles;
