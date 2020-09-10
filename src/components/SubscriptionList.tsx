import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store';
import { setSubscriptions } from '../store/subscriptionReducer';

interface SubscriptionListProps {
}

const SubscriptionList: React.FC<SubscriptionListProps> = ({ }) => {
  const dispatch = useDispatch();
  const subscriptions = useSelector((state: ApplicationState) => state.subscriptions);
  const profile = useSelector((state: ApplicationState) => state.profile);

  useEffect(() => {
    if (profile.user !== '') {
      setTimeout(() => {
        dispatch(setSubscriptions([
          { name: 'Fastpris', number: '071111111111' },
          { name: 'Fastpris', number: '071111111112' },
          { name: 'Fastpris', number: '071111111113' },
          { name: 'Fastpris', number: '071111111114' },
          { name: 'Fastpris', number: '071111111115' },
          { name: 'Fastpris', number: '071111111116' },
        ]))
      }, 1000);

    }
  }, [profile.user]);

  return (
    <>
      <h1>Subs:</h1>
      <ul>
        {subscriptions.list.map(sub => <li>{sub.name}: {sub.number}</li>)}
      </ul>
    </>
  );
};

export default SubscriptionList;