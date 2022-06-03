import styles from './sideBar.module.scss';
import { lists, FILTERS } from './sideBar.mock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import Accordion from 'react-bootstrap/Accordion'
import { MOCK_TASKS } from '../Tasks/tasks.mock';

const SideBar = ({ showList }) => {

  const renderFiltersLists = () => {
    const filtersElement = Object.keys(FILTERS).map( (filter) => 
      <li className={styles.listItem}>
        <FontAwesomeIcon icon={faCalendarDays} />
        <span className={styles.itemLabel}>{FILTERS[filter]}</span>
      </li>
    );
    return (
      <Accordion.Item className={styles.accordionItem} eventKey="0">
        <Accordion.Header className={styles.accordionHeader}>Filters</Accordion.Header>
        <Accordion.Body>
          <ul>{filtersElement}</ul>
        </Accordion.Body>
      </Accordion.Item>
    );
  };

  const showListCB = (id) => () => {
    showList(id);
  };

  const renderLists = () => {
    const listNames = lists.map((list) =>
      <li className={styles.listItem} onClick={showListCB(list.id)}>
        <FontAwesomeIcon icon={faClipboardList} />
        <span className={styles.itemLabel}>{list.name}</span>
      </li>
    );
    return (
      <Accordion.Item className={styles.accordionItem} eventKey="1">
        <Accordion.Header className={styles.accordionHeader}>Lists</Accordion.Header>
        <Accordion.Body className={styles.accordionBody}>
          <ul>{listNames}</ul>
        </Accordion.Body>
      </Accordion.Item>)
  };

  const defaultActiveKeys = ["0", "1"]; 

  return (
    <div className={styles.container}>
      <Accordion defaultActiveKey={defaultActiveKeys} alwaysOpen>
        {renderFiltersLists()}
        {renderLists()}
      </Accordion>
    </div>
  );
};  

export default SideBar;