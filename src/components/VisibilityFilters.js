import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <Box sx={{ margin: 'auto', maxWidth: 500, bgcolor: 'background.paper' }}>
    <Card className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
            <CardContent sx={{display:"inline"}}>
          <Button
            size="small"
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </Button>
          </CardContent>
        );
      })}
    </Card>
    </Box>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
