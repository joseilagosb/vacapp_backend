export const selectPlaceSnapshot = `
    select
        :place_id as place_id, 
        :day as day_of_week, 
        :hour as hour_of_day, 
        current_crowds.people_no as crowd_people_no,
        current_queues.people_no as queue_people_no,
        (select 
            round(cast(avg(place_indicator.indicator_value) as numeric),1)
        from 
            place_indicator
        where 
            place_indicator.place_id = current_crowds.place_id
            and place_indicator.indicator_id in (1,2,3)) as covid_safety_score,
        (select
            round(cast(avg(place_indicator.indicator_value) as numeric),1)
        from 
            place_indicator
        where 
            place_indicator.place_id = current_crowds.place_id
            and place_indicator.indicator_id in (4,6)) as service_quality_score 
    from current_crowds, current_queues
    where 
        (current_crowds.place_id = :place_id)
        and (current_queues.place_id = :place_id) 
        and ((crowd_day_of_week = :day and crowd_hour = :hour) 
            and (queue_day_of_week = :day and queue_hour = :hour))
`;

export const selectAllPlaceSnapshots = `
    select
        current_crowds.place_id as place_id, 
        :day as day_of_week, 
        :hour as hour_of_day, 
        current_crowds.people_no  as crowd_people_no,
        current_queues.people_no as queue_people_no,
        (select 
                round(cast(avg(place_indicator.indicator_value) as numeric),1)
            from 
                place_indicator
            where 
                place_indicator.place_id = current_crowds.place_id
                and place_indicator.indicator_id in (1,2,3)) as covid_safety_score,
        (select 
                round(cast(avg(place_indicator.indicator_value) as numeric),1)
            from 
                place_indicator
            where 
                place_indicator.place_id = current_crowds.place_id
                and place_indicator.indicator_id in (4,6)) as service_quality_score
    from current_crowds, current_queues
    where
        (current_crowds.place_id = current_queues.place_id)
        and ((crowd_day_of_week = :day and crowd_hour = :hour) 
            and (queue_day_of_week = :day and queue_hour = :hour))
`;
