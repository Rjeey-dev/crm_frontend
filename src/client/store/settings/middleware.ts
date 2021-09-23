import {IEvent} from "store/interfaces";
import {handlePreloader} from "store/settings/preloader";

const middleware = (store: Storage) => (next: any) => (action: IEvent): any => {
    handlePreloader(action, store);

    return next(action);
};

export default middleware
