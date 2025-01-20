import * as SC from "./FAQItem.style";
import { TDataFAQ } from "@/app/main/_components/FAQ/FAQ";
import {
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";
import PlusIcon from "@/image/icons/PlusIcon";
import MinusIcon from "@/image/icons/MinusIcon";

type TFAQItemPropsChange = {
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: string | false;
};
const FAQItem = ({
  title,
  desc,
  number,
  span,
  handleChange,
  expanded,
}: TDataFAQ & TFAQItemPropsChange) => {
  return (
    <SC.SAccordion
      expanded={expanded === number}
      onChange={handleChange(number)}
    >
      <AccordionSummary
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        sx={{ display: "flex", gap: "40px", margin: 0 }}
      >
        <Stack direction="row" gap={"40px"} sx={{ padding: "22px 40px" }}>
          <Typography variant="h4">{number}</Typography>
          <Typography sx={{ textTransform: "uppercase" }} variant="h4">
            {title}
          </Typography>
        </Stack>
        {expanded === number && (
          <SC.IconWrapper
            className="IconWrapper"
            isActive={expanded === number}
            isVisible={expanded === number}
          >
            {expanded === number && <PlusIcon />}
          </SC.IconWrapper>
        )}
        {expanded !== number && (
          <SC.IconWrapper
            className="IconWrapper"
            isActive={expanded === number}
            isVisible={expanded !== number}
          >
            {expanded !== number && <MinusIcon />}
          </SC.IconWrapper>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ marginLeft: "66px" }}>
        <Typography
          width={"90%"}
          sx={{ paddingBottom: "20px" }}
          variant="body1"
        >
          {desc}{" "}
          {span && (
            <Typography
              sx={{ color: "#0149E2" }}
              variant="body1"
              component="span"
            >
              {span}
            </Typography>
          )}
        </Typography>
      </AccordionDetails>
    </SC.SAccordion>
  );
};

export default FAQItem;