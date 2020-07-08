export enum STATUS_DPS {
    DEFAULT = '1',
    PLAY_PAUSE = '2',
	DIRECTION = '3',
	WORK_MODE = '5',
	WORK_STATUS = '15',
	GO_HOME = '101',
	CLEAN_SPEED = '102',
	FIND_ROBOT = '103',
	BATTERY_LEVEL = '104',
	ERROR_CODE = '106'
}

export enum WorkStatus {
	// Cleaning
	RUNNING = 'Running',
	// In the dock, charging
	CHARGING = 'Charging',
	// Not in the dock, paused
	STAND_BY = 'standby',
	// Not in the dock - goes into this state after being paused for a while
	SLEEPING = 'Sleeping',
	// Going home because battery is depleted
	RECHARGE_NEEDED = 'Recharge',
	// In the dock, full charged
	COMPLETED = 'completed'
}

export enum WorkMode {
	AUTO = 'auto',
	NO_SWEEP = 'Nosweep',
	SMALL_ROOM = 'SmallRoom',
	EDGE = 'Edge',
	SPOT = 'Spot'
}

export interface StatusResponse {
	devId: string;
	dps: {
		[STATUS_DPS.DEFAULT]: boolean;
		[STATUS_DPS.PLAY_PAUSE]: boolean;
		[STATUS_DPS.DIRECTION]: string;
		[STATUS_DPS.WORK_MODE]: WorkMode;
		[STATUS_DPS.WORK_STATUS]: WorkStatus;
		[STATUS_DPS.GO_HOME]: boolean;
		[STATUS_DPS.CLEAN_SPEED]: string;
		[STATUS_DPS.FIND_ROBOT]: boolean;
		[STATUS_DPS.BATTERY_LEVEL]: number;
		[STATUS_DPS.ERROR_CODE]: string;
	}
}
