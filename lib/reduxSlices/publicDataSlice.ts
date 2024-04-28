import { produce } from 'immer';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type initialStateType = {
//     value: {
//         switcher: {[key: string]: SwitcherState} | {},
//         templates: Template | {}
//     }
// } 

// type SwitcherState = {
//     label: string,
//     value: string
// }

const initialState = {
    value: {
        // switcher: {},
        // templates: {},
    }
}
// type ActionPayload = {
//     schemas?: any; // Replace `any` with a more specific type if possible
//     basePdf?: string;
//     sampledata?: any; // Replace `any` with a more specific type if possible
//     columns?: any; // Replace `any` with a more specific type if possible
//     key: string;
// }

const publicDataSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        // reset: () => {
        //     return initialState;
        // },
        // addSwitchers: (state = initialState, action) => {
        //     return produce(state, (draftState) => {
        //         draftState.value.switcher = {...draftState.value.switcher, ...action.payload}
        //     })
        // },
        // addSwitcher: (state = initialState, action: {
        //     payload: {key: string, value: any};
        //     type: string;
        // }) => {
        //     const {key, value} = action.payload
        //     return produce(state, (draftState: any) => {
        //         draftState.value.switcher[key] = value
        //     })
        // },
        // removeSwitcher: (state = initialState, action) => {
        //     return produce(state, (draftState) => {
        //         const { key } = action.payload;
        //         draftState.value.switcher = {
        //             ...draftState.value.switcher,
        //             [key]: undefined
        //         }
        //     })
        // },
        // removeSwitchers: (state = initialState, action) => {
        //     return produce(state, (draftState) => {
        //         draftState.value.switcher = {}
        //     })
        // },
        // addTemplate: (state = initialState, action: {
        //     payload: {key: string, value: any};
        //     type: string;
        // }) => {
        //     return produce(state, (draftState: any) => {
        //         const { key, value } = action.payload
        //         draftState.value.templates[key] = value
        //     })
        // },
        // removeTemplate: (state = initialState, action) => {
        //     return produce(state, (draftState) => {
        //         const { key } = action.payload
        //         draftState.value.templates = {
        //             ...draftState.value.templates,
        //             [key]: undefined
        //         }
        //     })
        // }
    }
})

export const {
    // reset,
    // addSwitchers,
    // addSwitcher,
    // removeSwitcher,
    // removeSwitchers,
    // addTemplate,
    // updateTemplate,
    // removeTemplate
} = publicDataSlice.actions

export default publicDataSlice