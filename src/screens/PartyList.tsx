import {View} from "react-native";
import { List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { selectParties } from "../redux/selectors/PartySelectors";
import PartyListItem from "../components/PartyListItem";
import { useEffect } from "react";
import { getPartyList } from "../redux/thunks/PartyThunk";
import { Party } from "../model/Party";
import { UserPartial } from "../model/UserPartial";
import { selectUser } from "../redux/selectors/AuthSelectors";

export default function PartyList(){
    const parties : Party[] = useSelector(selectParties);
    const user : UserPartial = useSelector(selectUser);

    const dispatch = useDispatch();
    useEffect(() => {
        //@ts-ignore
        const loadParties = () => dispatch(getPartyList(user));
        loadParties();
    }, [dispatch]);
    return(
        <List.Section>
            {parties ? parties.map((party : any) => <PartyListItem key={party.id} party={party}/>) : undefined}
        </List.Section>
    )
}