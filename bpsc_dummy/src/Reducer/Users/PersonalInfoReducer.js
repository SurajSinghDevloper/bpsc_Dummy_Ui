import { userConstant } from "../../Constants/UserConstant";

const initialState = {
    userProfileInfo: null,
    updatingProfile: false,
    updateProfileError: null,
};

const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case userConstant.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                updatingProfile: true,
                updateProfileError: null,
            };
        case userConstant.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                userProfileInfo: action.payload.userProfileInfo,
                updatingProfile: false,
                updateProfileError: null,
            };
        case userConstant.UPDATE_PROFILE_FAILURE:
            return {
                ...state,
                updatingProfile: false,
                updateProfileError: action.payload.error,
            };
        // ... other cases ...
        default:
            return state;
    }
};

export default personalInfoReducer;